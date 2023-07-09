import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeroSection.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={`section ${cx('hero-section')}`}>
      <h3 className={cx('slogan')}>{t('hero_section.slogan')}</h3>
      <button className={`btn btn--rounded ${cx('hero-section-button')}`}>
        {t('hero_section.our_works')}
      </button>
    </section>
  );
}

export default HeroSection;
