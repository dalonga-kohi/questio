import { NavLink } from 'react-router-dom'
import { useSelector } from '../../../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
  const target = useSelector((state) => state.nav.historyPath)

  return (
    <nav className="px-4 md:px-6 py-6 flex absolute w-full items-center justify-between">
      <NavLink to={target} className="link text-xl font-bold">
        <FontAwesomeIcon icon={faArrowLeft} /> Go back
      </NavLink>
    </nav>
  )
}

export default Nav
