var OpenStreetMap = L.map('Chicago').setView([41.87, 87.62], 4)
L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png').addTo(OpenStreetMap)
var renameThisMarkerObject = L.marker([41.8863, 87.7173]).addTo(OpenStreetMap)
var renameThisPolygonObject = L.polygon([
  [42, 85],
  [46, 85],
  [43, 79]
]).addTo(OpenStreetMap)
renameThisPolygonObject.bindPopup('Chicago is boring and windy.')
renameThisMarkerObject.bindPopup('Chicago is boring and windy.')
