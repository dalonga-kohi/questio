import { QuestItem } from '../../../../lib/axios'
import Tag from './Tag'

interface IProps {
  data: QuestItem
}
const URL = 'http://localhost:6789'
const Card = ({ data }: IProps) => {
  const img = URL + data.image

  return (
    <article className="rounded-xl cursor-pointer sm:w-80 w-52 flex flex-col justify-center items-center dark:bg-teal-900 pb-4">
      <img src={img} alt="" className="object-cover rounded-t-xl h-36 w-full" />
      <div className="w-full pt-2 pl-4">
        <h3 className="font-semibold text-lg mb-1">{data.title}</h3>
        <div className="flex w-full">
          {data.tags?.split(';').map((v, i) => <Tag key={i} tag={v} />)}
        </div>
      </div>
    </article>
  )
}

export default Card
