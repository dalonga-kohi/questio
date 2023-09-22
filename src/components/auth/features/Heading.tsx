import { PropsWithChildren } from 'react'

const Heading = ({ children }: PropsWithChildren) => {
  return <h1 className="text-4xl mb-4 font-semibold">{children}</h1>
}

export default Heading
