import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'

const SettingsIcon = () => {
  return (
    <button className="group relative">
      <FontAwesomeIcon className="" icon={faGear} />
      <Tooltip>Settings</Tooltip>
    </button>
  )
}

export default SettingsIcon
