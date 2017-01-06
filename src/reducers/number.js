import { combineReducers } from 'redux'

const number = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return state++
    case 'MINUS_NUMBER':
      return state--
    default:
      return state
  }
}

const counterApp = combineReducers({
  number
})

export default counterApp
