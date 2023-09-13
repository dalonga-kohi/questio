import { PropsWithChildren } from 'react'


const LoginLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      
      <main className="dark:bg-black bg-gray-300 h-screen rounded-t-3xl px-6 md:px-10 pt-2 pb-44 overflow-y-auto max-h-screen">
        {children}
      </main>
      
    </>
  )
}

export default LoginLayout
