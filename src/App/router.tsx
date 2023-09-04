import MainPage from '../pages/MainPage'
import ErrorPage from '../pages/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
])

export default router
