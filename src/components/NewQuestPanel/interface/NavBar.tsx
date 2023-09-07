import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <nav className="px-4 md:px-6 py-6 flex absolute w-full items-center justify-between dark:bg-black-darker bg-white">
      <NavLink to="/" className="link text-xl">
        <FontAwesomeIcon icon={faCaretLeft} /> Go back
      </NavLink>
      <h1 className="text-xl font-black dark:text-accent text-green-500">
        ADD NEW QUEST
      </h1>
    </nav>
  )
}

export default NavBar
