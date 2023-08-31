import { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <nav></nav>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
