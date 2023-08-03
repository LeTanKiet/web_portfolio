import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import arrow_left from '../../assets/arrow-left.svg';
import arrow_right from '../../assets/arrow-right.svg';
import './Carousel.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useOnKeyDown } from '../../hooks/useWindowSize';

function Carousel(props) {
  const [showModal, setShowModal] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);
  const bodyRef = useRef(null);
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);

  const handleSwiperInit = (swiper) => {
    swiper.slideTo(initialSlideIndex);
  };

  const handleImageClick = (index) => {
    setShowModal(true);
    setInitialSlideIndex(index);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        if (arrowLeftRef.current && showModal) {
          arrowLeftRef.current.click();
        }
        break;
      case 'ArrowRight':
        if (arrowRightRef.current && showModal) {
          arrowRightRef.current.click();
        }
        break;
      case 'Escape':
        setShowModal(false);
        break;
      default:
        break;
    }
  };
  useOnKeyDown(handleKeyDown);

  return (
    <section className="section carousel">
      <h1 className="heading">{props.headerName}</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        loopPreventsSliding={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="slide_image" className="slide-image" onClick={() => handleImageClick(index)} />
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <img src={arrow_left} alt="arrow-left" className="arrow-icon" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <img src={arrow_right} alt="arrow-right" className="arrow-icon" />
          </div>
        </div>
      </Swiper>
      {showModal && (
        <div className="modal">
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>
          <div className="modal-content" ref={bodyRef}>
            <Swiper
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                enabled: true,
              }}
              modules={[Navigation]}
              onSwiper={handleSwiperInit}
            >
              {props.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="product">
                    <div
                      className="product-thumbnail"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                      }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="slider-controller">
                <div className={`swiper-button-prev slider-arrow`} ref={arrowLeftRef}>
                  <img src={arrow_left} alt="arrow-left" className="arrow-icon" />
                </div>
                <div className={`swiper-button-next slider-arrow`} ref={arrowRightRef}>
                  <img src={arrow_right} alt="arrow-right" className="arrow-icon" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}

export default Carousel;
