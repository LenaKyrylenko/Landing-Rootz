import img_main from '../../materials/img-main.png'
import img_plants from '../../materials/img plants.png'
import img_energy from '../../materials/img energy.png'
import img_plastic from '../../materials/img plastic.png'
import img_organic from '../../materials/img organic.png'
import chevron_left from '../../materials/Chevron Left.png'
import {Row,Col} from 'antd'
import { useState } from 'react'

const CarouselItem = ({ img }) => <img src={img} />

const Dots = ({ countImages, indexNow, onChange }) => {
  const array = []
  for (let i = 0; i < countImages; i++) {
    array.push(
      <button onClick={() => onChange(i)} style={{ borderRadius: '50px' }}>
        .
      </button>,
    )
  }

  return (
    <div>
      <ul>{array}</ul>
    </div>
  )
}
const Gallery = ({
  images = [img_main, img_plants, img_energy, img_plants, img_plastic, img_organic],
}) => {
  const [index, setIndex] = useState(0)
  return (
    <div className="Carousel">
      {/* <button onClick={()=>(index==0)? (setIndex(images.length-1)) :setIndex(index-1)}> назад </button> */}
          <Row>
              <Col>
          <img src={images[index]} />
      {/* <Dots countImages={images.length} indexNow={index} onChange={setIndex} /> */}
              </Col>
          </Row>
          <Row>
              <Col>
      <img
        src={chevron_left}
        className="Carousel__arrow"
        onClick={() => setIndex((images.length + index - 1) % images.length)}
          />
          { index + 1 } / 6
      <img
        src={chevron_left} style={{ transform: "rotate(180deg)"}}
        className="Carousel__arrow"
        onClick={() => setIndex((images.length + index + 1) % images.length)}
                  />
              </Col>
</Row>
      {/* <button onClick={()=>(index===(images.length-1))? (setIndex(0)) :setIndex(index+1)}> вперед </button> */}
    </div>
  )
}

const Carousel = () => {
  return <Gallery />
  // <CarouselItem img={img_main} />
}
export default Carousel
