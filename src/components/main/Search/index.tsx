import SearchBar, { InputEvent } from './features/SearchBar'
import { useSelector } from '../../../store'
import { useDispatch } from 'react-redux'
import { setInputValue } from './SearchSlice'

const Search = () => {
  const dispatch = useDispatch()
  const val = useSelector((state) => state.search.val)

  const inputHandler = (e: InputEvent) => {
    dispatch(setInputValue({ val: e.target.value }))
  }

  return (
    <div className="flex flex-col justify-start items-center pt-4 sm:pt-6">
      <SearchBar handler={inputHandler} value={val} />
    </div>
  )
}

export default Search
