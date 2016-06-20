import { REQUEST_POSITIONS, RECEIVE_POSITIONS } from '../constants/ActionTypes'

const initialState = { isFetching: false, list: [] }
export default function positions (state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSITIONS:
      return { isFetching: true }
    case RECEIVE_POSITIONS:
      return {
        isFetching: false,
        list: action.list,
      }
    default:
      return state
  }
}
