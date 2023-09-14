import { useSelector } from '../../../store'

const Preview = () => {
  const data = useSelector((state) => state.questPanel)

  return (
    <div>
      Title: {data.title}
      <br />
      Description: {data.desc}
    </div>
  )
}

export default Preview
