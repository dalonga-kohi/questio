import { useEffect, useRef, useState } from 'react'
import { BASE_URL, QuestItem } from '../../../../lib/axios'
import Tag from './Tag'
import { FastAverageColor } from 'fast-average-color'

interface IProps {
  data: QuestItem
}
const Card = ({ data }: IProps) => {
  const ctx = useRef<HTMLDivElement>(null)
  const img = BASE_URL + data.image
  const [, setColor] = useState<string>('')
  useEffect(() => {
    const fac = new FastAverageColor()

    fac
      .getColorAsync(img)
      .then((res) => {
        if (!ctx.current) return
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
      className="group bg-cover shadow-lg rounded-xl cursor-pointer hover:scale-x-105 transition-transform sm:w-80 w-72 mr-4 flex-col inline-block h-44 sm:h-48 justify-between items-start"
    >
      <div className='flex justify-between items-start w-full h-full flex-col'>
      <div className="flex w-full gap-2 p-2 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity">
        {data.tags?.split(';').map((v, i) => {
          if (i < 3) return <Tag key={i} tag={v} />
        })}
      </div>
      <h3
        ref={ctx}
        className='font-semibold rounded-b-xl capitalize text-lg w-full p-3'
      >
        {data.title}
      </h3>
      </div>
    </article>
  )
}

export default Card
