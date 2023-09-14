import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DataItem, axiosGet } from '../../../../lib/axios'

type Category = 'latest' | 'popular' | 'recommended' | 'beginner' | 'advanced'

interface IQuestProps {
  category: Category
  title: string
}

const QuestSection = ({ category, title }: IQuestProps) => {
  const link = `/category/${category}`
  const [data, setData] = useState<DataItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    axiosGet<DataItem[]>(`quests/?category=${category}&count=5`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [category])
  console.log(data)

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

      <section>{loading ? 'Loading...' : '1'}</section>
    </>
  )
}

export default QuestSection
