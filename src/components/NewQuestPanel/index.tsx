import Editor from './features/Editor'
import Preview from './features/Preview'

const NewQuestPanel = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <Preview />
      <Editor />
    </div>
  )
}

export default NewQuestPanel
