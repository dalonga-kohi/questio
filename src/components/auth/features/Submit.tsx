interface IProps {
  value: string
}

const Submit = ({ value }: IProps) => {
  return (
    <span className="w-full flex justify-center">
      <input
        type="submit"
        value={value}
        className="input rounded-xl w-full mt-7 outline-2 focus:outline-slate-600 dark:focus:outline-white capitalize dark:bg-accent bg-green-500 dark:text-black-darker border-0 shadow-sm font-semibold cursor-pointer text-lg"
      />
    </span>
  )
}

export default Submit
