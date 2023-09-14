import { PropsWithChildren } from 'react'
import ThemeIcon from '../components/main/interface/TopBar/features/ThemeIcon'

const LoginLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <span className='hidden'><ThemeIcon /></span>
      <main className="flex w-full items-center justify-center sm:items-start sm:px-20 sm:py-20 h-screen">
        {children}
      </main>
    </>
  )
}

export default LoginLayout
