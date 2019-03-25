import { combineReducers } from 'redux'
import blogs from './blogs'
import getId from './getId'

const rootReducer = combineReducers({
  blogs,
  getId,
})

export default rootReducer