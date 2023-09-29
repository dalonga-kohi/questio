import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { QuestResponse, axiosGet } from '../../../lib/axios'
import QuestsGrid from './features/QuestsGrid'
import Nav from './features/Nav'

const Quests = () => {
  const { cat } = useParams()
  const [data, setData] = useState<QuestResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const category = cat ?? 'random'
    axiosGet<QuestResponse>(`quests/?category=${category}&count=30`)
      .then((response) => {
        setData(response)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
        setLoading(false)
      })
  }, [cat])
  return (
    <div className="xl:px-2 py-3 flex flex-col justify-center items-center w-full">
      <Nav title={cat} />
      <QuestsGrid loading={loading} data={data} />
    </div>
  )
}
export default Quests
