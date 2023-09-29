import QuestSection from './QuestSection'

const Home = () => {
  return (
    <div className="pt-6">
      <QuestSection category="popular" title="Most Popular 🔥" />
      {/* <QuestSection category="recommended" title="For You 😁" /> */}
      <QuestSection category="latest" title="Latest 🎉" />
      <QuestSection category="beginner" title="For Beginners 👶" />
      <QuestSection category="advanced" title="Advanced 🏋️‍♀️" />
    </div>
  )
}

export default Home
