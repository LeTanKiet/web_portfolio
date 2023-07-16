import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWindowSize } from '../../hooks/useWindowSize';
import { PRODUCT_LIST } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import arrow_left from "../../assets/arrow-left.svg";
import arrow_right from "../../assets/arrow-right.svg";

const cx = classNames.bind(styles);

function Products() {
  const { width } = useWindowSize();
  const [slidesPerView, setSlidesPerView] = useState<number>(2);
  const { t } = useTranslation();

  useEffect(() => {
    if (width < 640) {
      if (slidesPerView === 2) setSlidesPerView(1);
    } else {
      if (slidesPerView === 1) setSlidesPerView(2);
    }
  }, [width, slidesPerView]);

  return (
    <section className='section' id='products'>
      <h2 className={`section-header`}>{t('product.header')}</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        pagination={{
          type: 'fraction',
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {PRODUCT_LIST.map((product) => (
          <SwiperSlide key={product.name}>
            <div className={cx('product')}>
              <div
                className={cx('product-thumbnail')}
                style={{
                  backgroundImage: `url(${product.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: `${slidesPerView === 1 ? (width < 512 ? `${width - 32}px` : '480px') : '570px'}`,
                  height: `${slidesPerView === 1 ? '600px' : '600px'}`,
                }}
              ></div>
              <div className={cx('product-body')}>
                <h4 className={cx('product-name')}>{product.name}</h4>
                <p className={cx('product-description')}>
                  {product.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={cx("slider-controller")}>
          <div className={`swiper-button-prev ${cx("slider-arrow")}`}>
            <img src={arrow_left} alt="arrow-left" className={cx("arrow-icon")} />
          </div>
          <div className={`swiper-button-next ${cx("slider-arrow")}`}>
            <img src={arrow_right} alt="arrow-right" className={cx("arrow-icon")} />
          </div>
        </div>
      </Swiper>
    </section >
  );
}

export default Products;
