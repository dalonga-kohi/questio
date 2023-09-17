interface IProps extends React.PropsWithChildren {
    submit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}

const Form = ({submit, children}: IProps) => {
    return (
        <form
        onSubmit={submit}
        className="h-screen sm:h-max pb-12 pt-24 sm:pt-12 px-8 sm:px-14 flex flex-col w-full max-w-3xl shadow rounded-lg divide-y dark:divide-gray-200 divide-gray-500 dark:bg-black bg-gray-300 md:rounded-xl"
        >
            {children}
        </form>
    )
}

export default Form