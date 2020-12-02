import React from 'react'
import { connect } from 'react-redux'

import { fetchProducts } from '../actions'
import Map from './Map'

export class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <Map />
      </div>
    )
  }
}

export default connect()(App)
