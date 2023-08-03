import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import classNames from 'classnames/bind';
import styles from './HeroSection.module.scss';
import { useTranslation } from 'react-i18next';
import { HERO_SECTIONS } from '../../utils/constants';

const cx = classNames.bind(styles);

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={`section ${cx('hero-section')}`}>
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
      >
        {HERO_SECTIONS.map((section, index) => (
          <SwiperSlide key={index} style={{ borderRadius: 8 }}>
            <div
              style={{
                backgroundImage: `url(${section})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 800,
                borderRadius: 8,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className={cx('slogan')}>{t('hero_section.slogan')}</h3>
    </section>
  );
}

export default HeroSection;
