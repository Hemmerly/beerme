import axios from 'axios'

//NOTE: Not totally sure what this does
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_BEERS = 'GET_BEERS'


/**
 * INITIAL STATE
 */
const defaultBeers = {
  beers: []
}

/**
 * ACTION CREATORS
 */
const getBeers = (beers) => ({ type: GET_BEERS, beers })


/**
 * THUNK CREATORS
 */

export const fetchBeers = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/beers`)
    dispatch(getBeers(res.data || defaultBeers))
  } catch (err) {
    console.error(err)
  }
}


/**
 * REDUCER
 */
export default function (state = defaultBeers, action) {
  switch (action.type) {
    case GET_BEERS:
      return action.beers
    default:
      return state
  }
}
