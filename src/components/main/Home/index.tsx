import QuestSection from './QuestSection'

const Home = () => {
  return (
    <div className="dark:bg-black bg-gray-300 h-screen rounded-t-3xl px-6 md:px-10 py-2 overflow-y-auto max-h-screen">
      <QuestSection category="popular" title="Most Popular 🔥" />
      <QuestSection category="recommended" title="For You 😁" />
      <QuestSection category="latest" title="Latest 🎉" />
      <QuestSection category="beginner" title="For Beginners 👶" />
      <QuestSection category="advanced" title="Advanced 🏋️‍♀️" />
    </div>
  )
}

export default Home
