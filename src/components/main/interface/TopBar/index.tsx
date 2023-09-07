import AddIcon from './features/AddIcon'
import SettingsIcon from './features/SettingsIcon'
import ThemeIcon from './features/ThemeIcon'
import { NavLink } from 'react-router-dom'

const TopBar = () => {
  return (
    <aside className="px-4 md:px-6 py-6 flex items-center justify-between dark:bg-black-darker bg-white">
      <h1 className="text-3xl font-black dark:text-accent text-green-500">
        <NavLink to="/">QUEST.IO</NavLink>
      </h1>
      <div className="text-2xl text-slate-700 dark:text-white-light">
        <AddIcon />
        <ThemeIcon />
        <SettingsIcon />
      </div>
    </aside>
  )
}

export default TopBar
