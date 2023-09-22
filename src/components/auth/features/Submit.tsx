interface IProps {
  value: string
}

const Submit = ({ value }: IProps) => {
  return (
    <span className="w-full flex justify-center">
      <input
        type="submit"
        value={value}
        className="input rounded-xl w-full mt-7 outline-2 focus:outline-slate-600 dark:focus:outline-white capitalize dark:bg-accent bg-green-500 dark:hover:bg-green-300 hover:bg-green-300 hover:rounded transition-all duration-300 ease-out dark:text-black-darker border-0 shadow-sm font-semibold cursor-pointer"
      />
    </span>
  )
}

export default Submit
