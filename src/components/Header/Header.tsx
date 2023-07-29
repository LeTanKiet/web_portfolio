import { useEffect, useRef, useState } from 'react';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import logoStudio from '../../assets/logo-studio.svg';
import SocialIconList from '../SocialIconList/SocialIconList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DarkModeSwitch from './components/DarkModeSwitch/DarkModeSwitch';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';
import config from '../../configs';
import { NAVIGATION_TABS } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../hooks/useWindowSize';

const cx = className.bind(styles);

function Header() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { width } = useWindowSize();

  useEffect(() => {
    const currentTabElement = document.querySelector(`#navigation-item-${pathname.slice(1)}`);
    const { offsetLeft, offsetWidth } = currentTabElement as HTMLAnchorElement;
    if (lineRef.current) {
      lineRef.current.style.left = offsetLeft + 'px';
      lineRef.current.style.width = offsetWidth + 'px';
    }
  }, [pathname]);

  useEffect(() => {
    if (openMenu && width > 640) {
      setOpenMenu(false);
    }
  }, [width, openMenu]);

  return (
    <header className={cx('header')}>
      <div className={cx('header-body')}>
        {/* Menu */}
        <div className={cx('menu-icon')}>
          <FontAwesomeIcon icon={faBars} onClick={() => setOpenMenu(true)} className={cx('icon')} />
        </div>
        <div className={`header-menu ${cx('header-menu')}`} style={{ top: openMenu ? '0px' : 'calc(-1 * 100vh)' }}>
          <div className={cx('menu-close')} onClick={() => setOpenMenu(false)}>
            &times;
          </div>
          <div className={cx('navigation-list-menu')}>
            {NAVIGATION_TABS.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={cx('navigation-item-link')}
                onClick={() => setOpenMenu(false)}
              >
                {t(`header.navigation_tabs.${index}`)}
              </Link>
            ))}
          </div>
          <div className={cx('menu-header-button')}>
            <SocialIconList />
            <LanguageSwitch />
          </div>
        </div>

        <Link to={config.routes.home} className={cx('logo')}>
          <img className={cx('logo-image')} src={logoStudio} alt="Studio Name" />
        </Link>

        <div className={cx('navigation-list')}>
          {NAVIGATION_TABS.map((item, index) => (
            <Link
              id={`navigation-item-${item.path.slice(1)}`}
              key={item.path}
              to={item.path}
              className={cx('navigation-item-link')}
            >
              {t(`header.navigation_tabs.${index}`)}
            </Link>
          ))}
          {/* <div ref={lineRef} className={cx('line')}></div> */}
        </div>

        <div className={cx('header-icon-list')}>
          <div className={cx('header-button')}>
            <LanguageSwitch />
            <DarkModeSwitch id="header" />
          </div>
          <SocialIconList />
        </div>

        <div className={cx('dark-mode-mobile')}>
          <DarkModeSwitch id="header-mobile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
