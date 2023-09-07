import MainPage from '../pages/MainPage'
import ErrorPage from '../pages/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'
import SearchPage from '../pages/SearchPage'
import AddNewPage from '../pages/AddNewPage'
import SettingsPage from '../pages/SettingsPage'

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
  {
    path: '/new',
    element: <AddNewPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
    errorElement: <ErrorPage />,
  },
])

export default router
