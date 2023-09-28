import { useEffect, useRef } from 'react'
import Card from '../features/Card'
import { QuestResponse } from '../../../../lib/axios'

interface IProps {
  loading: boolean
  data: QuestResponse | null
}

const Slider = ({ loading, data }: IProps) => {
  const comp = useRef<HTMLDivElement>(null)
  let isDown = false
  let startX = 0
  let scrollLeft = 0

  const end = () => {
    isDown = false
    if (!comp.current) return
    comp.current.style.cursor = 'pointer'
  }
  const start = (e: MouseEvent) => {
    isDown = true
    if (!comp.current) return
    comp.current.style.cursor = 'grab'
    startX = e.pageX
    scrollLeft = comp.current.scrollLeft
  }
  const startTouch = (e: TouchEvent) => {
    isDown = true
    if (!comp.current) return
    comp.current.style.cursor = 'grab'
    startX = e.touches[0].pageX - comp.current.offsetLeft
    scrollLeft = comp.current.scrollLeft
  }
  const move = (e: MouseEvent) => {
    if (!isDown) return
    e.preventDefault()
    if (!comp.current) return
    const x = e.pageX
    const dist = x - startX
    comp.current.scrollLeft = scrollLeft - dist
  }
  const moveTouch = (e: TouchEvent) => {
    if (!isDown) return
    e.preventDefault()
    if (!comp.current) return
    const x = e.touches[0].pageX - comp.current.offsetLeft
    const dist = x - startX
    comp.current.scrollLeft = scrollLeft - dist
  }
  useEffect(() => {
    if (!comp.current) return
    comp.current.addEventListener('mousedown', start)
    comp.current.addEventListener('touchstart', startTouch)
    comp.current.addEventListener('mousemove', move)
    comp.current.addEventListener('touchmove', moveTouch)
    comp.current.addEventListener('mouseleave', end)
    comp.current.addEventListener('mouseup', end)
    comp.current.addEventListener('touchend', end)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section
      ref={comp}
      className="mb-12 w-screen relative whitespace-nowrap overflow-hidden"
    >
      {loading
        ? 'Loading...'
        : data?.response.map((d, i) => {
            return <Card key={i} data={d} isInline={true}/>
          })}
      {!loading && !data ? 'No Results!' : ''}
    </section>
  )
}

export default Slider
