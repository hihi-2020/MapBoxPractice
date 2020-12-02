import React from 'react'
// import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFja2VuYWRhbSIsImEiOiJja2k3MHE1aDEwcmF2MnJvbGd2NWE5aW9mIn0.fFQVww5WDzwFB5zgovZ6NQ'

class Map extends React.Component {
    state = {
      initial: {
        lng: 174.7571,
        lat: -41.2873,
        zoom: 10
      },
      start: {
        lng: 174.7571,
        lat: -41.2873,
        zoom: 10
      },
      finish: {
        lng: 174.7571,
        lat: -41.2873,
        zoom: 10
      }
    }

    componentDidMount () {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.initial.lng, this.state.initial.lat],
        zoom: this.state.initial.zoom
      })

      const onDragEnd = (marker, stateKey) => {
        const lngLat = marker.getLngLat()
        console.log(lngLat)

        this.setState({
          [stateKey]: {
            lng: lngLat.lng,
            lat: lngLat.lat,
            zoom: 10
          }
        })
      }

      const startMarker = new mapboxgl.Marker({
        draggable: true,
        color: '#00ff00'
      })
        .setLngLat([174.7571, -41.2873])
        .addTo(map)

      const finishMarker = new mapboxgl.Marker({
        draggable: true,
        color: '#ff3300'
      })
        .setLngLat([174.7571, -41.2873])
        .addTo(map)

      startMarker.on('dragend', () => { onDragEnd(startMarker, 'start') })
      finishMarker.on('dragend', () => { onDragEnd(finishMarker, 'finish') })
    }

    render () {
      return (
        <div className='mapFrame'>
          <div ref={(el) => { this.mapContainer = el }} className="mapContainer" />
        </div>
      )
    }
}

export default Map
