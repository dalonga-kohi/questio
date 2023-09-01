import AddIcon from './AddIcon'
import SettingsIcon from './SettingsIcon'

const NavBar = () => {
  return (
    <nav className="px-6 py-8 flex items-center justify-between">
      <h1 className="text-3xl font-black text-blue-400">QUEST.IO</h1>
      <AddIcon />
      <SettingsIcon />
    </nav>
  )
}

export default NavBar
