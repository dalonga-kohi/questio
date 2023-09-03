import { NavLink } from 'react-router-dom'

type Category = 'latest' | 'popular' | 'recommended' | 'beginner' | 'advanced'

interface IQuestProps {
  category: Category
  title: string
}

const QuestSection = ({ category, title }: IQuestProps) => {
  const link = `/category/${category}`

  return (
    <section className="flex w-full justify-between items-center my-6">
      <h2>
        <NavLink to={link}>{title}</NavLink>
      </h2>
      <NavLink to={link} className="dark:text-white-light text-lg link">
        See All
      </NavLink>
    </section>
  )
}

export default QuestSection
