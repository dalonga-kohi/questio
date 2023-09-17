import { useRef } from "react"
import Card from '../features/Card'
import { QuestResponse } from "../../../../lib/axios"

interface IProps {
    loading: boolean
    data: QuestResponse | null
}

const Slider = ({loading, data}: IProps) => {
    const comp = useRef<HTMLDivElement>(null)
    let cursorX = 0
    let isPressed = false
    comp.current?.addEventListener("mousedown", (e) => {
        cursorX = e.offsetX - 0
        console.log(cursorX)
        isPressed = true
    })

    comp.current?.addEventListener("mousemove", (e) => {
        if(!isPressed || !comp.current) return
        e.preventDefault();
        comp.current.style.left = `${e.offsetX - cursorX}px`;
    })
    window.addEventListener("mouseup", () => {
        isPressed = false;
    });
    return (
        <section ref={comp} className="mb-6 flex min-w-max relative gap-4">
        {loading
          ? 'Loading...'
          : data?.response.map((d, i) => {
              return <Card key={i} data={d}/>
            })}
      </section>
    )
}

export default Slider