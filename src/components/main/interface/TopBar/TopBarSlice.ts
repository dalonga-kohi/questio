import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDark: 'false',
}
interface State {
  isDark: string
}

const TopBarSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleDarkMode: (state: State) => {
      if (state.isDark === 'true') state.isDark = 'false'
      else state.isDark = 'true'
    },
  },
})

export const { toggleDarkMode } = TopBarSlice.actions

export default TopBarSlice.reducer
