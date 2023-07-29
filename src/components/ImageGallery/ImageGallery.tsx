import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ImageGallery.module.scss';
import { NUMBER_OF_IMAGES_IN_GALLERY } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import arrow_left from '../../assets/arrow-left.svg';
import arrow_right from '../../assets/arrow-right.svg';
import { useOnClickOutside } from '../../hooks/useWindowSize';

const cx = classNames.bind(styles);

type Props = {
  title: string;
  images: string[];
};

const ImageGallery = ({ title, images }: Props) => {
  const { t } = useTranslation();
  const [numberOfImages, setNumberOfImages] = useState(NUMBER_OF_IMAGES_IN_GALLERY);
  const [openModal, setOpenModal] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(bodyRef, () => {
    setOpenModal(false);
  });

  const handleSwiperInit = (swiper: any) => {
    swiper.slideTo(initialSlideIndex);
  };

  return (
    <section className="section">
      <h2 className={cx('heading')}>{title}</h2>
      <div className={cx('gallery')}>
        {images.slice(0, numberOfImages).map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt=""
              className={cx('image')}
              onClick={() => {
                setOpenModal(true);
                setInitialSlideIndex(index);
              }}
            />
          </div>
        ))}
      </div>
      {numberOfImages < images.length && (
        <div className={cx('load-more')}>
          <span onClick={() => setNumberOfImages(numberOfImages + NUMBER_OF_IMAGES_IN_GALLERY)}>
            {t('story.see_more')}
          </span>
        </div>
      )}

      {openModal && (
        <div className={cx('modal')}>
          <div className={cx('body')} ref={bodyRef}>
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
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className={cx('product')}>
                    <div
                      className={cx('product-thumbnail')}
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '600px',
                      }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
              <div className={cx('slider-controller')}>
                <div className={`swiper-button-prev ${cx('slider-arrow')}`}>
                  <img src={arrow_left} alt="arrow-left" className={cx('arrow-icon')} />
                </div>
                <div className={`swiper-button-next ${cx('slider-arrow')}`}>
                  <img src={arrow_right} alt="arrow-right" className={cx('arrow-icon')} />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
