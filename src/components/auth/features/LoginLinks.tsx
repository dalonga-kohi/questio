import { Link } from 'react-router-dom'

const LoginLinks = () => {
  return (
    <div className="w-full mt-8 md:flex">
      <p>Don&#39;t have an account?</p>
      <Link to="/register" className="link md:ml-2 block">
        Register now
      </Link>
    </div>
  )
}

export default LoginLinks
