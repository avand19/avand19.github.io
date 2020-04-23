/*gLobal L jQuery */
var OpenStreetMap = L.map('OpenStreetMap').setView([41.87, -87.62], 6)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(renameThisMapObject)
jQuery.getJSON(statesUrl, function (data) {
 var stateStyle = function (feature) {
   var pop = feature.properties.POPULATION
   var statecolor = 'olive'
   if (age < 38) { statecolor = 'green'}
   return {
   color: stateColor,
   weight: 1,
   fillOpacity: 0.2
  }
}
var stateLayerOptions = {
  style: stateStyle,
  onEachFeature: createPopup
}
  L.geoJSON(data, { data, stateLayerOptions).addTo(OpenStreetMap)
})

var createPopup = function (feature, layer) {}
  var name = feature.properties.STATE_NAME
  var age = feature.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}
