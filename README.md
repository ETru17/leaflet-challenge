# leaflet-challenge
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Instructions
The instructions for this activity are broken into two parts:

## Part 1: Create the Earthquake Visualization

### Step 1: Get the Dataset
Visit the USGS GeoJSON Feed page and choose a dataset to visualize, such as "All Earthquakes from the Past 7 Days." Use the provided URL to fetch the data in JSON format.

### Step 2: Visualize the Data
Map Creation: Using Leaflet, create a map that plots all the earthquakes from the dataset based on their longitude and latitude.  

Marker Customization: Reflect the magnitude of the earthquake by the marker size and the depth by color. Larger markers indicate higher magnitudes, and darker colors indicate greater depths.  

Popups: Include popups that provide additional information about each earthquake when its marker is clicked.  

Legend: Add a legend to the map to provide context for the data.

### Features
Dynamic Markers: Earthquake markers vary in size and color based on magnitude and depth.
Interactive Popups: Clickable markers display detailed information about each earthquake.
Custom Legend: A legend explains the color coding for earthquake depth.

![map](https://github.com/user-attachments/assets/285e5354-8eca-47dc-a60c-1581214b9ab1)

## Credits
Earthquake data provided by the United States Geological Survey (USGS).  

Map tiles by OpenStreetMap.  

Leaflet.js for interactive maps.  

D3.js for data fetching and manipulation.  

ChatGpt for debugging, creating the legend and names for the colors for the map. 

