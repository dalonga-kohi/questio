import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { QuestResponse, axiosGet } from '../../../../lib/axios'
import Slider from './Slider'

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
    axiosGet<QuestResponse>(`quests/?category=${category}&count=6`)
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
      <div className="flex w-full justify-between items-center mb-6">
        <h2>
          <NavLink to={link}>{title}</NavLink>
        </h2>
        <NavLink to={link} className="dark:text-white-light text-lg link">
          See All
        </NavLink>
      </div>

      <Slider loading={loading} data={data} />
    </>
  )
}

export default QuestSection
