import Image1 from '../assets/images/Morant.jpg'
import Image2 from '../assets/images/Yanis.jpg'
import Image3 from '../assets/images/Kobe.jpg'
import Image4 from '../assets/images/Durant.jpg'
import Image5 from '../assets/images/curry.jpg'
import Image6 from '../assets/images/Jordan.jpg'
import { GoodsCard } from './GoodsCard'

const goods = [
  {
    image: Image1,
    contract: "120 Millions",
    name: 'Ja Morant',
  },
  {
    image: Image2,
    contract: "230 Millions",
    name: 'Yanis Adetokunbo',
  },
  {
    image: Image3,
    contract: "180 Millions",
    name: 'Kobe Brayant',
  },
  {
    image: Image4,
    contract: "260 Millions",
    name: 'Kevin Durant',
  },
  {
    image: Image5,
    contract: "210 Millions",
    name: 'Stefan Curry',
  },
  {
    image: Image6,
    contract: "450 Millions",
    name: 'Michael Jordan',
  },
]

export const Gallery = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {goods.map((g) => (
        <GoodsCard name={g.name} contract={g.contract} image={g.image} key={g.name} />
      ))}
    </div>
  )
}
