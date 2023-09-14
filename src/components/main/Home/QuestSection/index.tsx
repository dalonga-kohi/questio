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
      <div className="flex w-full justify-between items-center my-6">
        <h2>
          <NavLink to={link}>{title}</NavLink>
        </h2>
        <NavLink to={link} className="dark:text-white-light text-lg link">
          See All
        </NavLink>
      </div>

      <section>
        {loading
          ? 'Loading...'
          : data?.response.map((d, i) => {
              return <Card key={i} id={d.id} title={d.title} img={d.image} />
            })}
      </section>
    </>
  )
}

export default QuestSection
