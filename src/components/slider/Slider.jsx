import img_main from '../../materials/img-main.png'
import img_plants from '../../materials/img plants.png'
import img_energy from '../../materials/img energy.png'
import img_plastic from '../../materials/img plastic.png'
import img_organic from '../../materials/img organic.png'
import chevron_left from '../../materials/Chevron Left.png'
import { Row, Col } from 'antd'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper'
import anime from 'animejs'
import styles from './Slider.module.scss'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([Pagination])
const path =
  'M5.66353 95.2631C16.4005 59.7746 52.2383 40.8629 84.8728 23.0675C113.755 7.31838 144.951 -3.87076 177.423 1.60356C210.861 7.24081 239.608 26.3202 260.777 52.7224C284.198 81.9342 306.563 116.903 299.263 153.564C291.961 190.236 258.058 214.335 225.056 232.125C195.419 248.099 162.153 249.824 128.731 245.484C92.0479 240.721 52.7077 235.263 29.3132 206.706C4.25819 176.123 -5.76789 133.047 5.66353 95.2631Z'

const slides = [
  {
    title: 'Avoid plastic',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_plastic,
    imgWidth: '150px',
    imgHeight: '156px',
    path,
  },
  {
    title: 'Choose organic',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_organic,
    imgWidth: '210px',
    imgHeight: '215px',
    path,
  },
  {
    title: 'Save water',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_main,
    imgWidth: '210px',
    imgHeight: '215px',
    path,
  },
  {
    title: 'Plant trees',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_plants,
    imgWidth: '215px',
    imgHeight: '180px',
    path,
  },
  {
    title: 'Save energy',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_energy,
    imgWidth: '160px',
    imgHeight: '175px',
    path,
  },
]

const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    setWrapper(ref.current)
  }, [])

  return [wrapper, ref]
}
const Gallery = ({ slides }) => {
  const [navigationPrevEl, navigationPrevRef] = useSwiperRef()
  const [navigationNextEl, navigationNextRef] = useSwiperRef()
  const [paginationEl, paginationRef] = useSwiperRef()

  return (
    <>
      <div className="Carousel" id="mission">
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={100}
          effect={'coverflow'}
          grabCursor={true}
          navigation={{
            prevEl: navigationPrevEl,
            nextEl: navigationNextEl,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef
              swiper.params.navigation.nextEl = navigationNextRef

              // swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
          // slidesPerView={"auto"}
          pagination={{
            el: paginationEl,

            type: 'fraction',
          }}
          loop={true}
          // modules={[Pagination, Navigation]}
          // EffectCoverflow
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((i, index) => (
            <SwiperSlide key={index} className={styles.slide_item}>
              <div className={`${styles.slide_bg_1} item-bg`}>
                <svg
                  width="378"
                  height="334"
                  viewBox="0 0 378 334"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.6635 138.263C53.4005 102.775 89.2383 83.8629 121.873 66.0675C150.755 50.3184 181.951 39.1292 214.423 44.6036C247.861 50.2408 276.608 69.3202 297.777 95.7223C321.198 124.934 343.563 159.903 336.263 196.564C328.961 233.236 295.058 257.335 262.056 275.125C232.419 291.099 199.153 292.824 165.731 288.484C129.048 283.721 89.7077 278.263 66.3132 249.706C41.2582 219.123 31.2321 176.047 42.6635 138.263Z"
                    fill="#F7F3F4"
                  />
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.3437 135.445C40.1295 96.4899 79.468 75.7309 115.29 56.1972C146.993 38.9097 181.237 26.6275 216.881 32.6366C253.586 38.8245 285.14 59.7676 308.377 88.7488C334.086 120.814 358.635 159.198 350.622 199.441C342.607 239.695 305.393 266.148 269.166 285.675C236.635 303.21 200.119 305.104 163.433 300.34C123.166 295.111 79.9832 289.12 54.3034 257.774C26.801 224.204 15.7956 176.92 28.3437 135.445Z"
                    fill="#F7F3F4"
                  />
                </svg>

                <div className={styles.slide_description}>
                  <p className={`${styles.slide_title} slide-title`}>
                    {i.title}
                  </p>
                  <p
                    className={`${styles.slide_text} slide-text`}
                    data-text={i.text}
                  >
                    {i.text}
                  </p>
                </div>
              </div>
              <div className={`${styles.morph_container} item-container`}>
                <p className={`${styles.slide_duble_title} slide-duble-title`}>
                  {i.title}
                </p>

                <svg
                  className="item-svg"
                  width="330"
                  height="283"
                  viewBox="0 0 330 283"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={i.path}
                    fill={`url(#clipShape${index})`}
                  />
                  <defs>
                    <pattern
                      id={`clipShape${index}`}
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref={`#image${index}`}
                        transform="translate(0 -0.239437) scale(0.0026738 0.00263614)"
                      />
                    </pattern>

                    <image
                      className={styles.item_img}
                      id={`image${index}`}
                      width={i.imgWidth}
                      height={i.imgHeight}
                      xlinkHref={i.img}
                    />
                  </defs>
                </svg>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-btns">
          {' '}
          <img
            className="swiper-btn-prev"
            ref={navigationPrevRef}
            src={chevron_left}
          />
          <div ref={paginationRef} className={styles.eco_pagination}></div>
          <img
            className="swiper-btn-next"
            ref={navigationNextRef}
            style={{ transform: 'rotate(180deg)' }}
            src={chevron_left}
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
