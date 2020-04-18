 var OpenStreetMap = L.map('Beetlejuice').setView([41.87, 87.62], 6)
L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png').addTo(OpenStreetMap)
var Park = L.marker([41.8863, 87.7173]).addTo(OpenStreetMap)
var Greenway = L.polygon(
  [42, 85],
  [46, 85],
  [43, 79]
]).addTo(OpenStreetMap)
Greenway.bindPopup('Chicago is boring and windy.')
Park.bindPopup('Chicago is cool and funky.')
