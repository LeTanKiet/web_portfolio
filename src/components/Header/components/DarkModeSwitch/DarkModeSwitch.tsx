import React from 'react';
import classNames from 'classnames/bind';
import styles from './DarkModeSwitch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DarkModeSwitch() {
  return (
    <>
      <input className={cx('input')} type="checkbox" id="darkmode-toggle" />
      <label className={cx('label')} htmlFor="darkmode-toggle">
        <FontAwesomeIcon className={cx('sun')} icon={faSun} />
        <FontAwesomeIcon className={cx('moon')} icon={faMoon} />
      </label>
    </>
  );
}

export default DarkModeSwitch;
