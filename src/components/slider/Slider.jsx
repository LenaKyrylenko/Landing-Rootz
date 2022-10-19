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

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const CarouselItem = ({ img }) => <img src={img} />
const CarouselChoose = ({ img }) => (
  <h1>
    {' '}
    попало <img src={img} />
  </h1>
)
SwiperCore.use([Pagination])

// const Dots = ({ countImages, indexNow, onChange }) => {
//   const array = []
//   for (let i = 0; i < countImages; i++) {
//     array.push(
//       <button onClick={() => onChange(i)} style={{ borderRadius: '50px' }}>
//         .
//       </button>,
//     )
//   }

//   return (
//     <div>
//       <ul>{array}</ul>
//     </div>
//   )
// }
// const Gallery = ({
//   images = [img_plastic, img_organic,img_main, img_plants, img_energy],
// }) => {
//   const [i, setIndex] = useState(0)
// images.map((i,index)=>console.log('i ', index))
//   return (
//     <div className="Carousel">
//       {/* <button onClick={()=>(index==0)? (setIndex(images.length-1)) :setIndex(index-1)}> назад </button> */}
//           <Row >

//           {

//             images?.map((el, index) =>
//               (images[index]==images[i]) ?

//                 (
//                   <Col className="gutter-row" span={3}>
//                     <CarouselChoose img={images[i]} />
//                     </Col>
//                     )
//                   :
//                   (
//                   <Col><CarouselItem img={images[index]} />
//                     </Col>

//               //  <img src={images[index]} />
//                 )
//               )
//           }
//           {

//           }
//            {/* <img src={images[index]} /> */}

//       {/* <Dots countImages={images.length} indexNow={index} onChange={setIndex} /> */}

//           </Row>
//           <Row>
//               <Col>
//       <img
//         src={chevron_left}
//         className="Carousel__arrow"
//         onClick={() => setIndex((images.length + i - 1) % images.length)}
//           />
//           { i + 1 } / 6
//       <img
//         src={chevron_left} style={{ transform: "rotate(180deg)"}}
//         className="Carousel__arrow"
//         onClick={() => setIndex((images.length + i + 1) % images.length)}
//                   />
//               </Col>
// </Row>
//       {/* <button onClick={()=>(index===(images.length-1))? (setIndex(0)) :setIndex(index+1)}> вперед </button> */}
//     </div>
//   )
// }
const slides = [
  {
    title: 'Avoid plastic',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_plastic,
    imgWidth: '640px',
    imgHeight: '480px',
        path: 'M169.842 40.8394C197.72 39.3742 228.734 37.5936 248.776 56.7087C268.979 75.9772 268.251 106.666 267.881 134.343C267.517 161.517 264.791 189.396 246.725 209.96C227.436 231.916 199.321 247.105 169.842 245.937C141.206 244.802 118.659 224.532 98.915 204.101C79.8268 184.349 61.9999 161.594 62 134.343C62.0001 107.092 78.1315 82.6054 98.9156 64.5848C118.391 47.6989 143.916 42.2019 169.842 40.8394Z',
   
       },
  {
    title: 'Choose organic',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_organic,
    imgWidth: '640px',
    imgHeight: '520px',
    path:
      'M169.842 40.8394C197.72 39.3742 228.734 37.5936 248.776 56.7087C268.979 75.9772 268.251 106.666 267.881 134.343C267.517 161.517 264.791 189.396 246.725 209.96C227.436 231.916 199.321 247.105 169.842 245.937C141.206 244.802 118.659 224.532 98.915 204.101C79.8268 184.349 61.9999 161.594 62 134.343C62.0001 107.092 78.1315 82.6054 98.9156 64.5848C118.391 47.6989 143.916 42.2019 169.842 40.8394Z',
  },
  {
    title: 'Save water',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_main,
    imgWidth: '440px',
    imgHeight: '619px',
    path:
      'M169.327 31.5901C193.898 32.9619 218.568 38.1327 236.702 57.0339C255.595 76.727 265.307 104.576 267.23 133.636C269.33 165.358 268.42 201.369 247.666 222.704C227.361 243.578 196.664 235.914 169.327 234.282C144.141 232.779 118.259 232.067 98.8039 213.818C77.5451 193.876 62.7567 164.96 62.0322 133.636C61.2914 101.611 73.3822 69.6779 94.9944 49.123C115.172 29.9326 143.052 30.1233 169.327 31.5901Z',
  },
  {
    title: 'Plant trees',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_plants,
    imgWidth: '700px',
    imgHeight: '700px',
    path:
      'M167.652 38.5072C199.344 40.1932 225.872 49.0094 248.274 69.5903C270.607 90.1075 268.023 124.242 268.023 147.356C268.023 176.193 273.372 190.778 248.274 209.961C225.146 227.637 197.78 243.714 167.652 244.28C136.61 244.864 113.17 235.841 91.2973 215.675C69.4633 195.545 62.0299 175.715 62.5239 147.356C63.0062 119.666 63.3974 90.9454 82.6675 69.5903C103.616 46.3756 134.807 36.7598 167.652 38.5072Z',
  },
  {
    title: 'Save energy',
    text:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    img: img_energy,
    imgWidth: '670px',
    imgHeight: '560px',
    path:
      'M168.754 31.4997C196.699 30.0276 213.862 30.513 235.914 51.5937C257.967 72.6745 268.362 101.494 267.99 129.3C267.626 156.602 256.463 168.139 242.43 190.243C228.396 212.346 193.793 238.135 164.243 236.961C135.54 235.821 115.872 225.8 96.0811 205.273C76.9474 185.428 61.9999 156.679 62 129.3C62.0001 101.921 87.5609 72.2306 106.105 56.1149C124.649 39.9992 142.767 32.8686 168.754 31.4997Z',
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
const Gallery = ({
  images = [img_plastic, img_organic, img_main, img_plants, img_energy],
}) => {
  // const [swiperRef, setSwiperRef] = useState(null)
  const [navigationPrevEl, navigationPrevRef] = useSwiperRef()
  const [navigationNextEl, navigationNextRef] = useSwiperRef()
  const [paginationEl, paginationRef] = useSwiperRef()

  // const slideTo = (index) => swiperRef.slideTo(index);
  //   swiperRef?.on('slideChange', function () {
  //     var activeSlide = $slider.find('.swiper-slide.swiper-slide-active');
  //     if (activeSlide.hasClass('')) {
  //         $('#').addClass('');
  //     }
  //  });

  // const [paginationEl, paginationRef] = useSwiperRef();
  // const [navigationPrevEl, navigationPrevRef] = useSwiperRef();
  // const [navigationNextEl, navigationNextRef] = useSwiperRef();
  return (
    <>
      <div className="Carousel" id="mission">
        {/* <div className={``}> */}
          {/* <div className={styles.swiper_wrapper}> */}
            <Swiper
              // onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={true}
              spaceBetween={2}
              effect={'coverflow'}
              grabCursor={true}
              // OnSlideChange={() => console.log('slide Change')}
              // OnSwiper={setSwiperRef}
              navigation={{
                prevEl: navigationPrevEl,
                nextEl: navigationNextEl,
              }}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
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
              onSlideChange={(e) => {
              	let timeout;
              	clearTimeout(timeout);
              	timeout = setTimeout(() => {
                  if (e.el) {
                    console.log('eeee', e.el)
                    e.el.querySelector('.swiper-slide-active')

                  }
              	}, 100);
              }}
              loop={true}
              // modules={[Pagination, Navigation]}
              // EffectCoverflow
              // navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              // loopFillGroupWithBlank={true}
            >
              {slides.map((i, index) => (
                <SwiperSlide key={index} className={styles.slide_item}>
                  {/* {({ IsActive }) => (
      <div>Current Slide Is {IsActive ? 'active' : 'not Active'}</div>
    )} */}
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
                  <div className={`${styles.morph_container} item-container`}
                  // data-animation-path-duration='1500'
									// data-animation-path-easing='easeOutElastic'
									// data-morph-path='M77.1256 9.31513C92.0355 10.0476 107.005 12.8087 118.008 22.9016C129.473 33.4173 135.366 48.2881 136.533 63.8056C137.807 80.7447 137.255 99.9735 124.662 111.366C112.34 122.513 93.7136 118.42 77.1256 117.549C61.8426 116.746 46.1374 116.366 34.3325 106.621C21.4327 95.9727 12.4592 80.5321 12.0195 63.8056C11.57 46.705 18.9066 29.6532 32.0209 18.6773C44.2645 8.43001 61.1823 8.53188 77.1256 9.31513Z'
									
                  
                  >
                    
                    <p
                      className={`${styles.slide_duble_title} slide-duble-title`}
                    >
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
                        {/* <img
												// className={styles.item_img}
												// id={`image${index}`}
												width={i.imgWidth}
                      height={i.imgHeight}
                      src={i.img}
												// xlinkHref={`./assets/images/${i.img}`}
											/> */}
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
                  {/* <img src={slides[index]} /> */}
                </SwiperSlide>
              ))}

              {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
               */}
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
  return <Gallery />
  // <CarouselItem img={img_main} />
}
export default Carousel
