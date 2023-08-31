import { combineReducers } from 'redux'
import AppReducer from './App/AppSLice'

const rootReducer = combineReducers({
  AppSlice: AppReducer,
})

export default rootReducer
