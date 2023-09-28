import { ChangeEvent } from 'react'

export type InputEvent = ChangeEvent<HTMLInputElement>

interface IProps {
  handler: (event: InputEvent) => void
  value: string
}

const SearchBar = ({ handler, value }: IProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="px-4 rounded-l-xl py-2.5 border-2 dark:border-white-light transition-colors border-slate-700 border-r-0 dark:bg-black bg-white-light">
        🔍
      </div>
      <input
        type="text"
        value={value}
        onChange={handler}
        name="search-input"
        placeholder="Search for quests..."
        className="input max-w-2xl py-2 pl-2 rounded-l-none"
      />
    </div>
  )
}

export default SearchBar
