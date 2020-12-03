const request = require('superagent')

const baseURL = 'https://api.mapbox.com/directions/v5/mapbox/cycling/'

const token = 'pk.eyJ1IjoibWFja2VuYWRhbSIsImEiOiJja2k3MHE1aDEwcmF2MnJvbGd2NWE5aW9mIn0.fFQVww5WDzwFB5zgovZ6NQ'


export const fetchMapRoute = (coords) => {
  let str = ''
  const mappedCoords = coords.map((coordSet, i) => {
    if (i == coords.length - 1) {
      str = str + `${coordSet[0]}` + ',' + `${coordSet[1]}` + '?geometries=geojson&access_token=' + token
    } else {
      str = str + `${coordSet[0]}` + ',' + `${coordSet[1]}` + ';'
    }
    
    console.log(str)
    return str
  })
  return request
    .get(baseURL + mappedCoords)
    .then(response => {
      return response.body
    })
}

