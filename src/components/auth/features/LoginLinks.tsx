import { Link } from 'react-router-dom'

const LoginLinks = () => {
  return (
    <div className="w-full mt-8 md:flex justify-between">
      <div className="md:flex">
      <p>Don&#39;t have an account?</p>
      <Link to="/register" className="link md:ml-2 block">
        Register now
      </Link> 
      </div>
      <div className="text-base font-black text-anim bg-gradient-to-r from-green-500 via-orange-200 to-green-200 bg-clip-text text-transparent"> 
        QUEST.IO
      </div>
    </div>
  )
}

export default LoginLinks
