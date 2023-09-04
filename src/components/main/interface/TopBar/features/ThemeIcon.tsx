import { useDispatch } from 'react-redux'
import { toggleDarkMode } from '../TopBarSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from '../../../../../store'
import {
  setLocalStorage,
  useLocalStorage,
} from '../../../../../hooks/useLocalStorage'
import { useEffect } from 'react'
import Tooltip from './Tooltip'

const ThemeIcon = () => {
  const dispatch = useDispatch()
  const className = 'dark'
  const bodyClass = window.document.body.classList
  const dark = useSelector((state) => state.nav.isDark)
  const storage = useLocalStorage('dark-mode', 'true')

  useEffect(() => {
    if (dark != storage) {
      dispatch(toggleDarkMode())
      if (dark == 'true') bodyClass.remove(className)
      else bodyClass.add(className)
    }
  }, [])

  const modeToggleHandler = () => {
    dispatch(toggleDarkMode())
    if (dark == 'true') {
      bodyClass.remove(className)
      setLocalStorage('dark-mode', 'false')
      return
    }
    bodyClass.add(className)
    setLocalStorage('dark-mode', 'true')
  }

  return (
    <button
      className="md:mx-5 mx-3 w-8 dark:text-yellow-200 group relative"
      onClick={modeToggleHandler}
    >
      <FontAwesomeIcon icon={dark === 'false' ? faMoon : faSun} />
      <Tooltip>Change Theme</Tooltip>
    </button>
  )
}

export default ThemeIcon
