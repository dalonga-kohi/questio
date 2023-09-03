import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

interface IIconProps {
  icon: IconProp
  link: string
  caption: string
}

const Icon = ({ icon, link, caption }: IIconProps) => {
  return (
    <NavLink to={link} className="">
      <FontAwesomeIcon icon={icon} />
      <div className="">{caption}</div>
    </NavLink>
  )
}

export default Icon
