import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'

const FriendIcon = () => {
  return (
    <button className="group relative">
      <FontAwesomeIcon className="" icon={faUserGroup} />
      <Tooltip>Friends</Tooltip>
    </button>
  )
}

export default FriendIcon
