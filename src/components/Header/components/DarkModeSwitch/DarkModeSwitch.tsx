import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DarkModeSwitch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

interface Props {
  id: string;
}

function DarkModeSwitch({ id }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(() => {
    const darkMode = JSON.parse(localStorage.getItem('dark-mode') || 'false');
    console.log(darkMode);
    return darkMode;
  });

  useEffect(() => {
    const appElement = document.querySelector('#root');
    if (isChecked) {
      appElement?.classList.add('dark');
    } else {
      appElement?.classList.remove('dark');
    }
  }, [isChecked]);

  return (
    <>
      <input
        ref={inputRef}
        className={cx('input')}
        type='checkbox'
        id={`darkmode-toggle-${id}`}
        onChange={() => {
          setIsChecked(!isChecked);
          localStorage.setItem('dark-mode', JSON.stringify(!isChecked));
        }}
        checked={isChecked}
      />
      <label className={cx('label')} htmlFor={`darkmode-toggle-${id}`}>
        <FontAwesomeIcon className={cx('sun')} icon={faSun} />
        <FontAwesomeIcon className={cx('moon')} icon={faMoon} />
      </label>
    </>
  );
}

export default DarkModeSwitch;
