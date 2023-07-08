import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LanguageSwitch.module.scss';
import { LANGUAGE_LIST } from '../../../../utils/constants';

const cx = classNames.bind(styles);

function LanguageSwitch() {
  const [language, setLanguage] = useState(() => {
    const json = localStorage.getItem('language');
    const currentLanguage = json !== null ? JSON.parse(json) : 'en';
    return currentLanguage;
  });

  return (
    <div className={`dropdown ${cx('dropdown')}`}>
      <button
        className={`btn btn-danger dropdown-toggle ${cx('dropdown-toggle')}`}
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {LANGUAGE_LIST.find((l) => l.code === language)?.label}
      </button>
      <ul className='dropdown-menu'>
        {LANGUAGE_LIST.map((l) => (
          <li
            key={l.code}
            onClick={() => {
              setLanguage(l.code);
              localStorage.setItem('language', JSON.stringify(l.code));
            }}
          >
            <span className='dropdown-item' style={{ cursor: 'pointer' }}>
              {l.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitch;
