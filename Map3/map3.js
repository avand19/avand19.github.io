/*gLobal L jQuery */
var OpenStreetMap = L.map('map3').setView([41.87, -87.62], 6)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{y}.png').addTo(OpenStreetMap)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesUrl, function (data) {
 var stateStyle = function (feature) {
   var pop = feature.properties.POPULATION
   var statecolor = 'olive'
   if (age < 38) { statecolor = 'green'}
   return {
   color: statecolor,
   weight: 1,
   fillOpacity: 0.2
  }
}
  var geojsonoptions = {
      style: stateStyle
}
  L.geoJSON(data, { style: statestyle }).addTo(OpenStreetMap)
