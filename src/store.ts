import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import TopBarSlice from './components/main/interface/TopBar/TopBarSlice'
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'

const rootReducer = combineReducers({
  nav: TopBarSlice,
})

const Store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default Store
