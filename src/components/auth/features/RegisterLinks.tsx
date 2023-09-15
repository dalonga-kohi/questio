import { Link } from 'react-router-dom'

const RegisterLinks = () => {
  return (
    <div className="flex justify-around w-full flex-wrap py-2 md:py-4 items-center">
      <Link to="/login" className="link ml-2">
        Sign in
      </Link>
    </div>
  )
}

export default RegisterLinks
