import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDark: 'false',
  historyPath: '/'
}
interface State {
  isDark: string,
  historyPath: string
}

interface Action {
  payload: {path: string}
}

const TopBarSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleDarkMode: (state: State) => {
      if (state.isDark === 'true') state.isDark = 'false'
      else state.isDark = 'true'
    },
    addRoutingHistory: (state: State, action: Action) => {
      state.historyPath = action.payload.path
    }
  },
})

export const { toggleDarkMode, addRoutingHistory } = TopBarSlice.actions

export default TopBarSlice.reducer
