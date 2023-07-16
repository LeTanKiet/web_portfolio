import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import arrow_left from "../../assets/arrow-left.svg";
import arrow_right from "../../assets/arrow-right.svg";
import "./Carousel.scss";

function Carousel(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };
  return (
    <section className="section carousel">
      <h1 className="heading">{props.headerName}</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        loopPreventsSliding={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="slide_image" className="slide-image" onClick={() => handleImageClick(image)} />
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
          <img className="modal-content" src={selectedImage} alt='Modal' />
        </div>
      )}
    </section>
  );
}

export default Carousel;
