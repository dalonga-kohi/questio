import MainPage from '../pages/MainPage'
import ErrorPage from '../pages/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import SearchPage from '../pages/SearchPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
])

export default router
