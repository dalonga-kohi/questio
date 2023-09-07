import { ChangeEvent } from 'react'

export type InputEvent = ChangeEvent<HTMLInputElement>

interface IProps {
  handler: (event: InputEvent) => void,
  value: string
}

const SearchBar = ({ handler,value }: IProps) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handler}
        className="dark:bg-black-light"
      />
    </>
  )
}

export default SearchBar
