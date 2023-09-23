import { QuestResponse } from '../../../../lib/axios'
import Card from '../../Home/features/Card'

interface IProps {
    loading: boolean
    data: QuestResponse | null
}

const QuestsGrid = ({loading, data}: IProps) => {
    return (
        <section className="w-full flex flex-wrap justify-center gap-y-8 gap-x-4">
        {loading
          ? 'Loading...'
          : data?.response.map((d, i) => {
              return <Card key={i} data={d} />
        })}
        {!loading && !data ? 'No Results!' : ''}
      </section>
    )
}

export default QuestsGrid