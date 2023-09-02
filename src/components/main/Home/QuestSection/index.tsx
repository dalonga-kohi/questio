type Category = 'latest' | 'popular'

interface IQuestProps {
  category: Category
  title: string
}

const QuestSection = ({ title }: IQuestProps) => {
  return (
    <section>
      <h2>{title}</h2>
    </section>
  )
}

export default QuestSection
