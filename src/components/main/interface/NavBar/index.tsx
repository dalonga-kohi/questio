import AddIcon from './AddIcon'
import SettingsIcon from './SettingsIcon'
import ThemeIcon from './ThemeIcon'

const NavBar = () => {
  return (
    <nav className="px-2 md:px-6 py-4 flex items-center justify-between">
      <h1 className="text-3xl font-black dark:text-lime-100 text-slate-900">
        QUEST.IO
      </h1>
      <div className="text-2xl text-slate-700 dark:text-white-light">
        <AddIcon />
        <ThemeIcon />
        <SettingsIcon />
      </div>
    </nav>
  )
}

export default NavBar
