import { useEffect } from 'react'
import { BASE_URL, QuestItem } from '../../../../lib/axios'
import Tag from './Tag'
import { FastAverageColor } from 'fast-average-color'

interface IProps {
  data: QuestItem
}
const Card = ({ data}: IProps) => {
  const img = BASE_URL + data.image

  useEffect(() => {
    const fac = new FastAverageColor();
    const ctx = Array.from(document.querySelectorAll(`.card-${data.id?.toString()}`) as unknown as HTMLCollectionOf<HTMLElement>)

    fac.getColorAsync(img).then(res => {
      ctx.forEach(el => {
        el.style.backgroundColor = `${res.hex}ea`
        if(res.isDark) el.style.color = '#e6e6e6'
        if(res.isLight) el.style.color = '#060709'
      })
    }).catch(e => console.log(e))

    fac.destroy()
  }, [])

  return (
    <article style={{backgroundImage: `url(${img})`}}  className="group bg-cover mr-4 shadow-lg rounded-xl cursor-pointer hover:scale-110 transition-transform sm:w-80 w-11/12 flex flex-col h-32 sm:h-44 justify-between items-start">
        <div className="flex w-full p-2 flex-wrap opacity-0 group-hover:opacity-100 transition-transform group-hover:translate-y-0 -translate-y-2">
          {data.tags?.split(';').map((v, i) => {if(i < 3) return <Tag key={i} tag={v} />})}
        </div>
        <h3 className={`font-semibold rounded-b-xl capitalize text-lg w-full p-2 card-${data.id}`}>{data.title}</h3>
    </article>
  )
}

export default Card
