import { PropsWithChildren } from 'react'
import TopBar from '../components/main/interface/TopBar'
import IconBar from '../components/main/interface/IconBar'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar />
      <main className="dark:bg-black bg-gray-300 h-screen rounded-t-3xl px-6 md:px-10 pt-2 pb-44 overflow-y-auto max-h-screen">
        {children}
      </main>
      <IconBar />
    </>
  )
}

export default MainLayout
