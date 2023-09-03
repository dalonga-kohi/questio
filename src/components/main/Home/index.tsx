import QuestSection from './QuestSection'

const Home = () => {
  return (
    <div className="dark:bg-black min-h-screen bg-gray-300 rounded-t-3xl px-6 md:px-10 py-8">
      <QuestSection category="popular" title="Most Popular 🔥" />
      <QuestSection category="recommended" title="For You 😁" />
      <QuestSection category="latest" title="Latest 🎉" />
      <QuestSection category="beginner" title="For Beginners 👶" />
      <QuestSection category="advanced" title="Advanced 🏋️‍♀️" />
    </div>
  )
}

export default Home
