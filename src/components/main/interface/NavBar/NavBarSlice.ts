import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDark: 'false',
}
interface State {
  isDark: string
}

const NavBarSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: (state: State) => {
      if (state.isDark === 'true') state.isDark = 'false'
      else state.isDark = 'true'
    },
  },
})

export const { toggleDarkMode } = NavBarSlice.actions

export default NavBarSlice.reducer
