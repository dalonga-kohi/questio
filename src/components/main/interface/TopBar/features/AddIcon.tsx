import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'
import { NavLink, useLocation } from 'react-router-dom'
import { addRoutingHistory } from '../TopBarSlice'
import { useDispatch } from 'react-redux'

const AddIcon = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(addRoutingHistory({path: location.pathname}))
  }
  return (
    <NavLink to="/new" className="group relative"
    onClick={clickHandler}>
      <FontAwesomeIcon
        className="dark:text-accent text-green-500"
        icon={faCirclePlus}
      />
      <Tooltip>New Quest</Tooltip>
    </NavLink>
  )
}

export default AddIcon
