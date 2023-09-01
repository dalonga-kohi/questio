import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import NavBarSlice from './components/main/interface/NavBar/NavBarSlice'
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'

const rootReducer = combineReducers({
  nav: NavBarSlice,
})

const Store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default Store
