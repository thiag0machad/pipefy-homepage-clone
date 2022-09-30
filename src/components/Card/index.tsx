import { DragSourceMonitor, useDrag } from 'react-dnd'

import { Container, Label } from './styles'

const Card = ({ data }: any): JSX.Element => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  return (
    <Container ref={dragRef} isDragging={isDragging}>
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
