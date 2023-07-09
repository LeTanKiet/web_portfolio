import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LanguageSwitch.module.scss';
import { LANGUAGE_LIST } from '../../../../utils/constants';
import i18n from '../../../../locales/i18n';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function LanguageSwitch() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(() => {
    const currentLanguage = JSON.parse(
      localStorage.getItem('language') || 'en'
    );
    i18n.changeLanguage(currentLanguage);
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
        <li
          onClick={() => {
            i18n.changeLanguage('vi');
            setLanguage('vi');
            localStorage.setItem('language', JSON.stringify('vi'));
          }}
        >
          <span
            className={`dropdown-item ${language === 'vi' ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {t('header.vietnamese')}
          </span>
        </li>
        <li
          onClick={() => {
            i18n.changeLanguage('en');
            setLanguage('en');
            localStorage.setItem('language', JSON.stringify('en'));
          }}
        >
          <span
            className={`dropdown-item ${language === 'en' ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {t('header.english')}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default LanguageSwitch;
