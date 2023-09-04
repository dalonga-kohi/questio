import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

interface IIconProps {
  icon: IconProp
  link: string
  caption: string
}

const Icon = ({ icon, link, caption }: IIconProps) => {
  const location = useLocation()
  const isMatching = location.pathname === link
  return (
    <NavLink
      to={link}
      className={`
      flex flex-col justify-start items-center
      hover:bg-gray-400 dark:hover:bg-black rounded-md w-1/4 py-2 transition-colors
      ${isMatching ? 'dark:text-white-light text-slate-700' : 'text-gray-500'}
      `}
    >
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <div className="font-bold">{caption}</div>
    </NavLink>
  )
}

export default Icon
