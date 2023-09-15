interface IProps {
    value: string
}

const Submit = ({value} : IProps) => {
    return (
        <span className="w-full flex justify-center mb-8">
          <input
            type="submit"
            value={value}
            className="input rounded-lg py-2.5 w-full sm:max-w-md mt-12 outline-2 focus:outline-slate-600 dark:focus:outline-white uppercase dark:bg-accent bg-green-500 dark:text-black-darker border-0 shadow-sm font-medium cursor-pointer text-lg"
          />
        </span>
    )
}

export default Submit