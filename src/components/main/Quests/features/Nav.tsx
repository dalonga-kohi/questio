interface IProps {
    title: string | undefined
}

const Nav = ({title}: IProps) => {
    return (
        <h2 className="mb-6 w-full">{title ? title : 'Random'}</h2>
    )
}

export default Nav