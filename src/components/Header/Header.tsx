'use client';
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

const cx = className.bind(styles);

function Header() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const currentTabElement = document.querySelector(
      `#navigation-item-${pathname.slice(1)}`
    );
    const { offsetLeft, offsetWidth } = currentTabElement as HTMLAnchorElement;
    if (lineRef.current) {
      lineRef.current.style.left = offsetLeft + 'px';
      lineRef.current.style.width = offsetWidth + 'px';
    }
  }, [pathname]);

  return (
    <header className={cx('header')}>
      <div className={cx('header-body')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img
            className={cx('logo-image')}
            src={logoStudio}
            alt='Studio Name'
          />
        </Link>

        <div className={cx('navigation-list')}>
          {NAVIGATION_TABS.map((item) => (
            <Link
              id={`navigation-item-${item.path.slice(1)}`}
              key={item.path}
              to={item.path}
              className={cx('navigation-item-link')}
            >
              {item.name}
            </Link>
          ))}
          <div ref={lineRef} className={cx('line')}></div>
        </div>

        <div className={cx('header-icon-list')}>
          <div className={cx('header-button')}>
            <LanguageSwitch />
            <DarkModeSwitch />
          </div>
          <SocialIconList />
        </div>

        {/* Menu */}
        <FontAwesomeIcon
          className={cx('menu-icon')}
          icon={faBars}
          onClick={() => setOpenMenu(true)}
        />
        <div
          className={cx('header-menu')}
          style={{ top: openMenu ? '0px' : 'calc(-1 * 100vh)' }}
        >
          <div className={cx('menu-close')} onClick={() => setOpenMenu(false)}>
            &times;
          </div>
          <div className={cx('navigation-list-menu')}>
            {NAVIGATION_TABS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cx('navigation-item-link')}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
