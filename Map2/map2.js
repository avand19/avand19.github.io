var OpenStreetMap = L.map('Beetlejuice').setView([41.87, 87.62], 6)
L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png').addTo(OpenStreetMap)
L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(OpenStreetMap)
L.tileLayer.wms('https://mesonet.argon.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
  layers: 'warnings_c'
}).addTo(OpenStreetMap)
