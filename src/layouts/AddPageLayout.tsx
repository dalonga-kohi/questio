import { PropsWithChildren } from 'react'
import NavBar from '../components/NewQuestPanel/interface/NavBar'

const AddPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <main className="dark:bg-black bg-gray-300 h-screen px-6 md:px-10 pt-2 pb-44 overflow-y-auto max-h-screen">
        {children}
      </main>
    </>
  )
}

export default AddPageLayout
