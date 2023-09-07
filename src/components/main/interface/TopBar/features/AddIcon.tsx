import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'
import { NavLink } from 'react-router-dom'

const AddIcon = () => {
  return (
    <NavLink to="/new" className="group relative">
      <FontAwesomeIcon
        className="dark:text-accent text-green-500"
        icon={faCirclePlus}
      />
      <Tooltip>New Quest</Tooltip>
    </NavLink>
  )
}

export default AddIcon
