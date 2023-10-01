import { ChangeEvent } from 'react'

export type InputEvent = ChangeEvent<HTMLInputElement>

interface IProps {
  handler: (event: InputEvent) => void
  value: string
}

const SearchBar = ({ handler, value }: IProps) => {
  return (
    <div className="w-full flex flex-row-reverse items-center justify-center">
      <input
        type="text"
        value={value}
        onChange={handler}
        name="search-input"
        placeholder="Search for quests..."
        className="input max-w-2xl py-2 pl-2 rounded-l-none border-l-0 peer"
      />
      <div className="pl-3 pr-1 rounded-l-xl py-2.5 border-2 peer-focus:border-green-500 dark:peer-focus:border-accent dark:border-white-light transition-colors border-slate-700 border-r-0 dark:bg-black-light bg-white">
        🔍
      </div>
    </div>
  )
}

export default SearchBar
