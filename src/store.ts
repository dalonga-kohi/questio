import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import AppSlice from './App/AppSlice'
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'

const rootReducer = combineReducers({
  app: AppSlice,
})

const Store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default Store
