import { PropsWithChildren } from "react"

const Heading = ({children}: PropsWithChildren) => {
    return (
        <h1 className="text-5xl mb-10 font-semibold">{children}</h1>
    )
}

export default Heading