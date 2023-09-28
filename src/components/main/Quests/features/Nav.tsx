import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

interface IProps {
  title: string | undefined
}

const Nav = ({ title }: IProps) => {
  return (
    <div className="mb-10 mt-2 sm:mt-4 w-full flex justify-between items-center px-4 sm:px-10">
      <NavLink to="/" className="link text-xl font-bold">
        <FontAwesomeIcon icon={faArrowLeft} /> Go back
      </NavLink>
      <h2 className="">{title ? title : 'Random'}</h2>
    </div>
  )
}

export default Nav
