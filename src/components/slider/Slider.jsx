import chevron_left from '../../assets/Chevron Left.png'
import { Row, Col } from 'antd'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper'
import styles from './Slider.module.scss'
import bg from '../../assets/bg.png'
import slides from './SliderArray'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([Pagination])


const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    setWrapper(ref.current)
  }, [])

  return [wrapper, ref]
}
const Gallery = ({ slides, width }) => {
  const [paginationEl, paginationRef] = useSwiperRef()
  const navigationNextRef = useRef(null)
  const navigationPrevRef = useRef(null)

  return (
    <>
      <div className={styles.Carousel} id="mission">
        <Swiper
          centeredSlides={true}
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={5}
          spaceBetween={50}
          breakpoints={{
            310: {
              slidesPerView: 1,
              spaceBetween:100
            },
            640: {
              slidesPerView: 2,
              spaceBetween:30

            },
            768: {
              slidesPerView: 3,
              spaceBetween:70

            },
            1240: {
              slidesPerView: 4,
              spaceBetween:70

            },
            1650: {
              slidesPerView: 4,
              spaceBetween:100

            }
          }
        }
          // spaceBetween={100}
          // navigation={{
          //   nextEl: '.swiper-btn-next',
          //   prevEl: '.swiper-btn-prev',
          // }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: paginationEl,
            type: 'fraction',
          }}
          loop={true}
          // modules={[Pagination, Navigation]}
          // EffectCoverflow
          // navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {slides.map((i, index) => (
            <SwiperSlide key={index} className={styles.slide_item}>
              {({ isActive }) => (
                <div>
                  {isActive ? (
                    <div className={styles.slide_active}>
                      <img
                        className={styles.slide_bg}
                        src={bg}
                        alt={'background_slider'}
                      />
                      <p className={`${styles.slide_active_title}`}>{i.title}</p>
                      <p className={`${styles.slide_text}`}>{i.text}</p>
                      <img
                        className={styles.active_photo}
                        src={i.img}
                        alt={i.title}
                      />
                    </div>
                  ) : (
                    <div>
                      <p className={`${styles.slide_title}`}>{i.title}</p>
                      <p className={`${styles.slide_no_text}`}>{i.text}</p>
                      <img
                        className={styles.item_img}
                        id={`image${index}`}
                        width={i.imgWidth}
                        height={i.imgHeight}
                        src={i.img}
                      />
                    </div>
                  )}
                </div>
              )}


            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-btns">
          {' '}
          <div className="swiper-button-next" ref={navigationPrevRef} />
          <div ref={paginationRef} className="swiper_pagination" />
          <div
            className="swiper-button-prev"
            ref={navigationNextRef}
          />
        </div>
      </div>
    </>
  )
}
const Carousel = () => {
  return <Gallery slides={slides} />
}
export default Carousel
