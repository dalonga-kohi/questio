import { PropsWithChildren } from 'react'

const Tooltip = ({children}: PropsWithChildren) => {
    return <span className="tooltip sm:group-hover:scale-100 ">{children}</span>
}

export default Tooltip