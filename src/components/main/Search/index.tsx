import SearchBar, { InputEvent } from './features/SearchBar'
import { useSelector } from '../../../store'
import { useDispatch } from 'react-redux'
import { setInputValue } from './SearchSlice'
import useDebounce from '../../../hooks/useDebounce'
import { FormEvent, useEffect, useState } from 'react'

const Search = () => {
  const dispatch = useDispatch()
  const val = useSelector((state) => state.search.val)
  const debounced = useDebounce(val, 1000)
  const [prev, setPrev] = useState<string>('')

  const query = (data: string = debounced) => {
    if (!data) return
    if (data == prev) {
      return
    }

    setPrev(data)
    console.log(data)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(query, [debounced])

  const inputHandler = (e: InputEvent) => {
    dispatch(setInputValue({ val: e.target.value }))
  }
  useDebounce(query, 3000)
  return (
    <form
      className="flex flex-col justify-start items-center pt-4 sm:pt-6"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        query(val)
      }}
    >
      <SearchBar handler={inputHandler} value={val} />
      <input type="submit" value="" />
    </form>
  )
}

export default Search
