let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(queryUrl).then(function (data)  {
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {    
    
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p><hr><p>Magnitude: ${feature.properties.mag}</p>`);
    }

    function pointToLayer(feature, latlng) {
      let mag = feature.properties.mag;
      let depth = feature.geometry.coordinates[2];
      let color = chooseColor(mag);

      return L.circle(latlng, {
          radius: mag * 50000,  
          color: color,
          fillColor: color,
          fillOpacity: 0.75
      });
  }

  let earthquakes = L.geoJSON(earthquakeData, {
      onEachFeature: onEachFeature,
      pointToLayer: pointToLayer
  });

    createMap(earthquakes);
}

function createMap(earthquakes) {
    let baseMaps = {
        "Base Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }),
        
        "Topographic Map": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          })
    }; 
    
    let overlayMaps = {
        "Earthquakes": earthquakes
      };
    
      let myMap = L.map("map", {
        center: [
          37.09, -95.71
        ],
        zoom: 5,
        layers: [baseMaps["Base Map"]]
      });

    earthquakes.addTo(myMap);

    
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);


let legend = L.control({ position: 'bottomright' });

legend.onAdd = function() {
    let div = L.DomUtil.create('div', 'legend');
    let grades = [0, 1, 2, 3, 4, 5];
    let colors = ["#FFFFE0", "#FFFF00", "#FFD700", "#FFA500", "#FF4500", "#8B0000"];

    div.innerHTML += "<h4>Magnitude</h4>";
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};

legend.addTo(myMap);
}
  

function chooseColor(magnitude) {
    if (magnitude >= 5) return "#8B0000"; // Dark Red
    else if (magnitude >= 4) return "#FF4500"; // Orange Red
    else if (magnitude >= 3) return "#FFA500"; // Orange
    else if (magnitude >= 2) return "#FFD700"; // Gold
    else if (magnitude >= 1) return "#FFFF00"; // Yellow
    else return "#FFFFE0"; // Light Yellow
}
