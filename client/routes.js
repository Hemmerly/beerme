import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import PropTypes from 'prop-types'
import Beers from './components/beers'
import {fetchBeers} from './store'
import AlbersUSA from './components/map'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {/* Displays our Login component as a fallback */}        
        <Route component={Beers} />
        <Route component={AlbersUSA} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(fetchBeers())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
}
