import { useDispatch } from 'react-redux'
import { toggleDarkMode } from '../../../../App/AppSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeIcon = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(toggleDarkMode())}>
      <FontAwesomeIcon className="mx-6" icon={faMoon} />
    </button>
  )
}

export default ThemeIcon
