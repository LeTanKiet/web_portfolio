import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeroSection.module.scss';

const cx = classNames.bind(styles);

function HeroSection() {
  return (
    <section className={`section ${cx('hero-section')}`}>
      <h3 className={cx('slogan')}>Excellence in every pixels.</h3>
      <button className={`btn btn--rounded ${cx('hero-section-button')}`}>
        Our works
      </button>
    </section>
  );
}

export default HeroSection;
