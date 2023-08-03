import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { EMAIL, NAVIGATION_TABS, PHONE_NUMBER } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-body')}>
        <div className={cx('navigation-list')}>
          {NAVIGATION_TABS.map((item, index) => (
            <Link key={item.path} to={item.path} className={cx('navigation-item-link')}>
              {t(`header.navigation_tabs.${index}`)}
            </Link>
          ))}
        </div>

        <div className={cx('contact')}>
          <div className={cx('contact-phone')}>
            <h6 className={cx('contact-label')}>{t('footer.call_us')}</h6>
            <span className={cx('contact-description')}>{PHONE_NUMBER}</span>
          </div>
          <div className={cx('contact-address')}>
            <h6 className={cx('contact-label')}>{t('footer.email')}</h6>
            <span className={cx('contact-description')}>{EMAIL}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
