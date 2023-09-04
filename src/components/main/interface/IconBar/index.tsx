import Icon from './features/Icon'
import {
  faBookBookmark,
  faChartColumn,
  faHome,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

const IconBar = () => {
  return (
    <nav className="absolute bottom-0 flex justify-between px-2 bg-gray-200 shadow-lg sm:px-10 py-2 sm:rounded-xl items-center sm:bottom-6 left-1/2 -translate-x-1/2 dark:bg-black-light w-full sm:w-1/2 lg:w-1/3">
      <Icon link="/" caption="Home" icon={faHome} />
      <Icon link="/search" caption="Search" icon={faMagnifyingGlass} />
      <Icon link="/tracker" caption="Tracker" icon={faChartColumn} />
      <Icon link="/lib" caption="Library" icon={faBookBookmark} />
    </nav>
  )
}

export default IconBar
