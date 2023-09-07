import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  val: '',
}
interface State {
  val: string
}
interface Action {
  payload: { val: string }
}

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInputValue: (state: State, action: Action) => {
      state.val = action.payload.val
    },
  },
})

export const { setInputValue } = SearchSlice.actions

export default SearchSlice.reducer
