 var OpenStreetMap = L.map('illinois').setView([41.87, -87.62], 6)
L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png').addTo(OpenStreetMap)
var Park = L.marker([41.8863, -87.7173]).addTo(OpenStreetMap)
var Greenway = L.polygon([
  [42, -85],
  [46, -85],
  [43, -79]
]).addTo(OpenStreetMap)
Greenway.bindPopup('Chicago is boring and windy.')
Park.bindPopup('Chicago is cool and funky.')
var polylinePoints = L.polyline([
  [37.781814, -122.404740],
  [37.781719, -122.404637],
  [37.781489, -122.404949],
  [37.780704, -122.403945],
  [37.780012, -122.404827]
]).addTo(OpenStreetMap)
polylinePoints.bindPopup('Going to Chicago.')
