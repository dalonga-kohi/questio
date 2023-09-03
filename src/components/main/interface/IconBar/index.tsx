import Icon from './features/Icon'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const IconBar = () => {
  return (
    <aside>
      <Icon link="/" caption="Home" icon={faHome} />
    </aside>
  )
}

export default IconBar
