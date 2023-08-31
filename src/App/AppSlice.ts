import { AnyAction } from '@reduxjs/toolkit'

const initialState = [0]

export default function AppReducer(
  state = initialState,
  action: AnyAction,
): number[] {
  switch (action.type) {
    default:
      return state
  }
}
