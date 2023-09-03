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
    <NavLink
      to={link}
      className="flex flex-col dark:text-white-light text-slate-700 justify-start items-center hover:bg-gray-400 dark:hover:bg-black rounded-md w-1/4 py-2 transition-colors"
    >
      <FontAwesomeIcon icon={icon} className="text-2xl dark:text-white" />
      <div className="font-bold">{caption}</div>
    </NavLink>
  )
}

export default Icon
