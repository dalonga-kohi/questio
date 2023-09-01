import AddIcon from './AddIcon'
import SettingsIcon from './SettingsIcon'
import ThemeIcon from './ThemeIcon'

const NavBar = () => {
  return (
    <nav className="px-6 py-8 flex items-center justify-between">
      <h1 className="text-3xl font-black text-blue-400">QUEST.IO</h1>
      <div>
        <AddIcon />
        <ThemeIcon/>
        <SettingsIcon />
      </div>
    </nav>
  )
}

export default NavBar
