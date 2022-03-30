import { createStore } from 'redux'

const initState = {
  events: []
}

const reducer = (state = initState, action) => {
  if (action.type == 'SET_EVENTS') {
    return {
      ...state,
      events: action.payload
    }
  }

  return state
}

export default createStore(reducer, initState)
