import SearchBar, { InputEvent } from './features/SearchBar'
import { useSelector } from '../../../store'
import { useDispatch } from 'react-redux'
import { setInputValue } from './SearchSlice'
import useDebounce from '../../../hooks/useDebounce'
import { FormEvent, useEffect } from 'react'

const Search = () => {
  const dispatch = useDispatch()
  const val = useSelector((state) => state.search.val)
  const debounced = useDebounce(val, 1000)
  let isSubmit = false

  const query = (data: string) => {
    if (!data) return
    console.log(data)
  }

  const queryDeb = (data: string) => {
    if(isSubmit) {
      isSubmit = false
      return
    }
    query(data)
  }

  useEffect(() => {
    queryDeb(debounced)
  }, [debounced])
  const inputHandler = (e: InputEvent) => {
    dispatch(setInputValue({ val: e.target.value }))
  }
  useDebounce(query, 3000)
  return (
    <form
      className="flex flex-col justify-start items-center pt-4 sm:pt-6"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        isSubmit = true
        query(val)
      }}
    >
      <SearchBar handler={inputHandler} value={val} />
      <input type="submit" value="" />
    </form>
  )
}

export default Search
