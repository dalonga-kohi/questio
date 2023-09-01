import useDarkMode from '../hooks/useDarkMode'
import MainPage from '../pages/MainPage'
import './index.css'

function App() {
  useDarkMode()
  return (
    <>
      <MainPage />
    </>
  )
}

export default App
