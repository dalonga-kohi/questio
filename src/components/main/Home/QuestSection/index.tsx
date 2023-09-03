import { NavLink } from 'react-router-dom'

type Category = 'latest' | 'popular' | 'recommended' | 'beginner' | 'advanced'

interface IQuestProps {
  category: Category
  title: string
}

const QuestSection = ({ category, title }: IQuestProps) => {
  return (
    <section className="flex w-full justify-between items-center my-6">
      <h2>{title}</h2>
      <NavLink
        to={`/category/${category}`}
        className="dark:text-white-light text-lg link"
      >
        See All
      </NavLink>
    </section>
  )
}

export default QuestSection
