/*gLobal L jQuery */
var OpenStreetMap = L.map('map3').setView([41.87, -87.62], 6)
var statesLayerObject = L.layerGroup('https://{s}.tile.opentopomap.org/{z}/{y}.png').addTo(OpenStreetMap)
var grayBasemapObject = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(renameThisMapObject)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
var streetsBasemapObject = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(renameThisMapObject)
var basemapsObject = {
  'Streets': streetsBasemapObject,
  'Gray canvas': grayBasemapObject
}
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
