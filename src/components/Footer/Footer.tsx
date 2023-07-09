import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import SocialIconList from '../SocialIconList/SocialIconList';
import { Link } from 'react-router-dom';
import { ADDRESS, NAVIGATION_TABS, PHONE_NUMBER } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-body')}>
        <div className={cx('navigation-list')}>
          {NAVIGATION_TABS.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={cx('navigation-item-link')}
            >
              {t(`header.navigation_tabs.${index}`)}
            </Link>
          ))}
        </div>

        <div className={cx('contact')}>
          <div className={cx('contact-phone')}>
            <h6 className={cx('contact-label')}>{t('footer.call_us')}</h6>
            <a
              className={cx('contact-description')}
              href={`tel:${PHONE_NUMBER}`}
            >
              {PHONE_NUMBER}
            </a>
          </div>
          <div className={cx('contact-address')}>
            <h6 className={cx('contact-label')}>{t('footer.address')}</h6>
            <Link to='/aboutus#contact' className={cx('contact-description')}>
              {ADDRESS}
            </Link>
          </div>
        </div>

        <div className={cx('footer-icon-list')}>
          <SocialIconList />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
