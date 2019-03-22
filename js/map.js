var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var layerLine;
var layerStation;
var layerApartment = L.layerGroup().addTo(map);

var stationMarkerOptions = {
    radius: 5,
    fillColor: "#008080",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
//L.geoJSON(railLine).addTo(map);
//L.geoJSON(railStation).addTo(map);
