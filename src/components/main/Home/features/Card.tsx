import { useEffect, useRef, useState } from 'react'
import { BASE_URL, QuestItem } from '../../../../lib/axios'
import Tag from './Tag'
import { FastAverageColor } from 'fast-average-color'

interface IProps {
  data: QuestItem
}
const Card = ({ data}: IProps) => {
    const ctx = useRef<HTMLDivElement>(null)
    const img = BASE_URL + data.image
    const [, setColor] = useState<string>('')
  useEffect(() => {
    const fac = new FastAverageColor()

    fac
      .getColorAsync(img)
      .then((res) => {
        if(!ctx.current) return
        ctx.current.style.backgroundColor = `${res.hex}f5`
        setColor(res.hex)
        if (res.isDark) ctx.current.style.color = '#e6e6e6'
        else ctx.current.style.color = '#060709'
      })
      .catch((e) => console.log(e))

    fac.destroy()
  }, [data.id, img])

  return (
    <article
      style={{ backgroundImage: `url(${img})` }}
      className="group bg-cover shadow-lg rounded-xl cursor-pointer hover:scale-105 transition-transform sm:w-80 w-11/12 flex flex-col h-32 sm:h-44 justify-between items-start"
    >
      <div className="flex w-full gap-2 p-2 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity">
        {data.tags?.split(';').map((v, i) => {
          if (i < 3) return <Tag key={i} tag={v} />
        })}
      </div>
      <h3 ref={ctx}
        className={`font-semibold rounded-b-xl capitalize text-lg w-full p-3 card-${data.id}`}
      >
        {data.title}
      </h3>
    </article>
  )
}

export default Card
