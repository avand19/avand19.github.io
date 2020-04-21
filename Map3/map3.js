/*gLobal L jQuery */
var OpenStreetMap = L.map('map3').setView([41.87, -87.62], 6)
L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png').addTo(OpenStreetMap)
var statesUrl = 'https://{s}.tile.opentopomap.org/{z}/{y}.png'
jQuery.getJSON(statesUrl, function (data) {
  L.geoJSON(data, { style: { color: 'green' } }).addTo(OpenStreetMap)
})
