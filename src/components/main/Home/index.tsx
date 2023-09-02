import QuestSection from './QuestSection'

const Home = () => {
  return (
    <div className="dark:bg-black min-h-screen bg-gray-300 rounded-t-3xl px-6 md:px-10 py-8">
      <QuestSection category="latest" title="Most Popular🔥" />
    </div>
  )
}

export default Home
