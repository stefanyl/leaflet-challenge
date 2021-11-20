// Create map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5

});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Selected "All Earthquakes in Past 30 Days"
var baseUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

//Store API query variables
//var mag = "magnitude"
//var 

// Grab data
d3.json(baseUrl).then(function(response) {
  // Once we get response
  createFeatures(response.features);
});

function createFeatures(earthquakeData) {

  //Define function to run once for each feature
  //Give each feature a popup for additional info
  function onEachFeature(feature, layer) {
    layer.bindPopup()
  }
}