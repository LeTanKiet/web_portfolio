import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import config from '../../configs';
import { useWindowSize } from '../../hooks/useWindowSize';
import { CAROUSEL_IMAGES } from '../../utils/constants';
import Carousel from '../Carousel/Carousel';
import styles from './Products.module.scss';

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
    <section className="section" id="products">
      <h2 className={`section-header`}>{t('product.header')}</h2>

      <Carousel images={CAROUSEL_IMAGES} />

      <div className={cx('go-portfolio')}>
        <Link to={config.routes.portfolio} className={cx('portfolio-link')}>
          {t('product.view_my_portfolio')}
        </Link>
      </div>
    </section>
  );
}

export default Products;
