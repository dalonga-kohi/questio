import { createSlice } from '@reduxjs/toolkit'
import { localStorage, setLocalStorage } from '../hooks/useLocalStorage'

const initialState = {
  isDark: localStorage('dark-mode', 'true'),
}
interface State {
  isDark: string
}

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: (state: State) => {
      const className = 'dark'
      const bodyClass = window.document.body.classList

      if (state.isDark === 'true') {
        state.isDark = 'false'
        bodyClass.remove(className)
      } else if(state.isDark === 'false'){
        state.isDark = 'true'
        bodyClass.add(className)
      }

      setLocalStorage('dark-mode', state.isDark)
    },
  },
})

export const { toggleDarkMode } = AppSlice.actions

export default AppSlice.reducer
