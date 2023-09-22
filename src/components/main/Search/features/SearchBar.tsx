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
        placeholder="🔍 Search for quests..."
        className="rounded-3xl input max-w-2xl py-2"
      />
    </>
  )
}

export default SearchBar
