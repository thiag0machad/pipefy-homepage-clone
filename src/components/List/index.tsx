import { MdAdd } from 'react-icons/md'

import Card from '../Card'
import { Container } from './styles'

interface ListProps {
  data: any
  index: number
}

const List = ({ data, index: listIndex }: ListProps): JSX.Element => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={18} color="#fff" />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card: { id: number }, index: number) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  )
}

export default List
