import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const AddIcon = () => {
  return (
    <button>
      <FontAwesomeIcon className="dark:text-accent text-green-500" icon={faCirclePlus} />
    </button>
  )
}

export default AddIcon
