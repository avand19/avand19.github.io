/*gLobal L jQuery */
var Map3 = L.map('Map3').setView([41.87, -87.62], 6)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(worldcanvas)
var statesUrl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesUrl, function (data) {
 var stateStyle = function (feature) {
   var age = feature.properties.MED_AGE
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
  L.geoJSON(data, { data, stateLayerOptions).addTo(Map3)
})

var createPopup = function (feature, layer) {}
  var name = feature.properties.STATE_NAME
  var age = feature.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}
