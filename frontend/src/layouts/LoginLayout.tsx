import { PropsWithChildren } from 'react'
import ThemeIcon from '../components/main/interface/TopBar/features/ThemeIcon'
import Nav from '../components/auth/interface/Nav'

const LoginLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Nav />
      <span className="hidden">
        <ThemeIcon />
      </span>
      <main className="flex w-full items-center justify-center sm:items-start sm:px-36 sm:pb-12 sm:pt-24 h-screen">
        {children}
      </main>
    </>
  )
}

export default LoginLayout
