import { REQUEST_POSITIONS, RECEIVE_POSITIONS } from '../constants/ActionTypes'
import { map } from 'lodash'
import data from '../mock/positions' // Just for demonstration
import { Position } from 'models'

function mapPositions (data) {
  return map(data, p => new Position(p))
}

function requestPositions () {
  return { type: REQUEST_POSITIONS }
}

function receivePositions (list) {
  return {
    type: RECEIVE_POSITIONS,
    list,
  }
}

export function fetchPositions () {
  return dispatch => {
    dispatch(requestPositions())
    return new Promise(resolve => {
      // You can use any fetch promise based here to request your data
      // Timeout just for demonstration
      // return fetch('http://hu.workable.com/api/jobs')
      setTimeout(() => {
        resolve(data)
      }, 250)
    })
    .then(mapPositions)
    .then((positions) => {
      console.log('POSITIONS', positions)
      dispatch(receivePositions(positions))
    })
  }
}
