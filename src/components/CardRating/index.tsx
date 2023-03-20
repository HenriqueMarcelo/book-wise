import Image from 'next/image'
import { Stars } from '../Stars'
import { Time, Card, Info, CardHeader } from './styles'

export function CardRating() {
  return (
    <div>
      <Time>Há 2 dias</Time>
      <Card>
        <CardHeader>
          <Image src="/images/books/Book.png" alt="" width="108" height="152" />
          <Info>
            <div>
              <h3>A revolução dos bichos</h3>
              <h4>George Orwell</h4>
            </div>
            <Stars />
          </Info>
        </CardHeader>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          magnam obcaecati corrupti adipisci? Facere natus doloremque labore
          rerum officiis a deleniti, repellendus hic deserunt suscipit. Commodi
          voluptatum temporibus autem voluptas!
        </p>
      </Card>
    </div>
  )
}
