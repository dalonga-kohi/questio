import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className="w-full mt-2 text-right">
      <Link to="/register" className="link ml-2">
        Forgot Password?
      </Link>
    </div>
  )
}

export default Forgot
