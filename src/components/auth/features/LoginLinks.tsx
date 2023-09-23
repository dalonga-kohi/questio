import { Link } from 'react-router-dom'

const LoginLinks = () => {
  return (
    <div className="w-full mt-8 flex items-center justify-between">
      <div className="md:flex">
        <p>Don&#39;t have an account?</p>
        <Link to="/register" className="link md:ml-2 block">
          Register now
        </Link>
      </div>
      <Link
        to="/"
        className="font-black text-anim from-green-600 via-orange-400 dark:from-green-500 dark:via-orange-300 to-green-500 dark:to-green-400"
      >
        QUEST.IO
      </Link>
    </div>
  )
}

export default LoginLinks
