import { NavLink } from 'react-router-dom'

type Category = 'latest' | 'popular' | 'recommended' | ''

interface IQuestProps {
  category: Category
  title: string
}

const QuestSection = ({ category, title }: IQuestProps) => {
  return (
    <section className="flex w-full justify-between items-center">
      <h2>{title}</h2>
      <NavLink
        to={`/category/${category}`}
        className="text-white-light font-bold text-lg"
      >
        See More
      </NavLink>
    </section>
  )
}

export default QuestSection
