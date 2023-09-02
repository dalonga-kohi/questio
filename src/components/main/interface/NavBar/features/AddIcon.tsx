import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'

const AddIcon = () => {
  return (
    <button className="group relative">
      <FontAwesomeIcon className="dark:text-accent text-green-500" icon={faCirclePlus} />
      <Tooltip>New Quest</Tooltip>
    </button>
  )
}

export default AddIcon
