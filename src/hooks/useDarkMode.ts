import { toggleDarkMode } from '../App/AppSlice'
import { localStorage } from './useLocalStorage'

const useDarkMode = () => {
  if (localStorage('dark-mode', 'true') === 'true') {
    window.document.body.classList.add('dark')
  }
  return toggleDarkMode()
}
export default useDarkMode
