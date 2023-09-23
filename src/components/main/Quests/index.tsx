import { useParams } from 'react-router-dom'
import Card from '../Home/features/Card'
import { useEffect, useState } from 'react'
import { QuestResponse, axiosGet } from '../../../lib/axios'

const QuestsGrid = () => {
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
    <section className="xl:px-2 py-3 flex flex-col justify-center items-center w-full">
      <h2 className="mb-6 w-full">{cat ? cat : 'Random'}</h2>
      <div className="w-full flex flex-wrap justify-center gap-y-8 gap-x-4">
        {loading
          ? 'Loading...'
          : data?.response.map((d, i) => {
              return <Card key={i} data={d} />
            })}
      </div>
    </section>
  )
}
export default QuestsGrid
