import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFja2VuYWRhbSIsImEiOiJja2k3MHE1aDEwcmF2MnJvbGd2NWE5aW9mIn0.fFQVww5WDzwFB5zgovZ6NQ'

class Map extends React.Component {

    state = {
        start: {
            lng: 5,
            lat: 34,
            zoom: 2
        }
    }

    componentDidMount () {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.start.lng, this.state.start.lat],
            zoom: this.state.start.zoom
        })
        map.on('move', () => {
            this.setState({
                start: {
                    lng: map.getCenter().lng.toFixed(4),
                    lat: map.getCenter().lat.toFixed(4),
                    zoom: map.getZoom(). toFixed(2)
                }
            })
        })
    }

    render () {
        return (
        <div className='mapFrame'>
            <div ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
        )
    }
}

export default Map