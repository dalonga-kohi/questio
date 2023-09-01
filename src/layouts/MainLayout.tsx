import { PropsWithChildren } from 'react'
import NavBar from '../components/main/interface/NavBar'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
