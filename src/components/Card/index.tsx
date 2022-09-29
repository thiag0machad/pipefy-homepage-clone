import { useDrag } from 'react-dnd'

import { Container, Label } from './styles'

const Card = ({ data }: any): JSX.Element => {
  useDrag({
    item: {},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  return (
    <Container>
      <header>
        {data.labels.map((label: any) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  )
}

export default Card
