import { PropsWithChildren } from 'react'
import NavBar from '../components/main/interface/NavBar'
import IconBar from '../components/main/interface/IconBar'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <IconBar />
    </>
  )
}

export default MainLayout
