import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className={cx('app')}>
      <Header />
      <div className={cx('content')}>{children}</div>
      <Footer />
    </div>
  );
}
