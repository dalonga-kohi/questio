import AddIcon from './features/AddIcon'
import SettingsIcon from './features/SettingsIcon'
import ThemeIcon from './features/ThemeIcon'

const NavBar = () => {
  return (
    <nav className="px-4 md:px-6 py-4 flex items-center justify-between">
      <h1 className="text-3xl font-black dark:text-accent text-green-500">
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
