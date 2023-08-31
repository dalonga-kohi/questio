import { combineReducers } from 'redux'
import AppReducer from './App/AppSlice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  AppSlice: AppReducer,
})

const Store = configureStore({
  reducer: rootReducer,
})

export default Store
