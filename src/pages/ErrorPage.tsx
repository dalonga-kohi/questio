import MainLayout from '../layouts/MainLayout'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <MainLayout>
      <div className="flex flex-col w-full justify-center items-center h-96">
        <h2>Oops!</h2>
        <p className="mt-2 mb-4">Sorry, page you looking for does not exist.</p>
        <NavLink to="/" className="link">
          Go Back
        </NavLink>
      </div>
    </MainLayout>
  )
}