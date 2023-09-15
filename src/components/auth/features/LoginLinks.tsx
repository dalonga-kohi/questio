import { Link } from 'react-router-dom'

const LoginLinks = () => {
  return (
    <div className="flex justify-around w-full flex-wrap py-2 md:py-4 items-center">
      <Link to="/reset" className="link">
        Forgot password?
      </Link>
      <Link to="/register" className="link ml-2">
        Don&#39;t have an account?
      </Link>
    </div>
  )
}

export default LoginLinks
