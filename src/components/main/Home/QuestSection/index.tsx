import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { aGet } from '../../../../lib/axios'

type Category = 'latest' | 'popular' | 'recommended' | 'beginner' | 'advanced'

interface IQuestProps {
  category: Category
  title: string
}

const QuestSection = ({ category, title }: IQuestProps) => {
  const link = `/category/${category}`
  const [quests, setQuests] = useState([{title: ''}])
  useEffect(() => {
    aGet(`quests/?category=${category}?count=5`).then(res => {
      setQuests(res)
    }).catch(err => console.error(err))
  }, [])
  console.log(quests)
  return (
    <>
      <div className="flex w-full justify-between items-center my-6">
      <h2>
        <NavLink to={link}>{title}</NavLink>
      </h2>
      <NavLink to={link} className="dark:text-white-light text-lg link">
        See All
      </NavLink>
    </div>

    <section>
      {quests.map(el => el.title)}
    </section>
    </>
  )
}

export default QuestSection
