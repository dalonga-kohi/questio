import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { QuestResponse, axiosGet } from '../../../../lib/axios'
import Card from '../features/Card'

type Category = 'latest' | 'popular' | 'recommended' | 'beginner' | 'advanced'

interface IQuestProps {
  category: Category
  title: string
}

const QuestSection = ({ category, title }: IQuestProps) => {
  const link = `/category/${category}`
  const [data, setData] = useState<QuestResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    axiosGet<QuestResponse>(`quests/?category=${category}&count=5`)
      .then((response) => {
        setData(response)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [category])

  return (
    <>
      <div className="flex w-full justify-between items-center mb-2">
        <h2>
          <NavLink to={link}>{title}</NavLink>
        </h2>
        <NavLink to={link} className="dark:text-white-light text-lg link">
          See All
        </NavLink>
      </div>

      <section className="mb-6 flex min-w-max">
        {loading
          ? 'Loading...'
          : data?.response.map((d, i) => {
              return <Card key={i} data={d} />
            })}
      </section>
    </>
  )
}

export default QuestSection
