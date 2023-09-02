import MainPage from '../pages/MainPage'
import ErrorPage from '../pages/ErrorPage'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
