import { ChangeEvent } from 'react'

export type InputEvent = ChangeEvent<HTMLInputElement>

interface IProps {
  handler: (event: InputEvent) => void
  value: string
}

const SearchBar = ({ handler, value }: IProps) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handler}
        placeholder="Search for quests..."
        className="dark:bg-black-light bg-white px-4 focus:border-green-500 dark:focus:border-accent border-2 transition-colors
        dark:border-white-light border-slate-700 rounded-3xl py-1 outline-none w-5/6 max-w-2xl"
      />
    </>
  )
}

export default SearchBar
