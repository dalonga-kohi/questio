import { useDispatch } from 'react-redux'
import MainPage from '../pages/MainPage'
import './index.css'
import { toggleDarkMode } from './AppSlice'

function App() {
  const dispatch = useDispatch()
  dispatch(toggleDarkMode())
  dispatch(toggleDarkMode())
  return (
    <>
      <MainPage />
    </>
  )
}

export default App
