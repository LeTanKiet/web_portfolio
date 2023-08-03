import React from 'react';
import classNames from 'classnames/bind';
import styles from './SocialIconList.module.scss';
import { ICON_LIST } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SocialIconList() {
  return (
    <div className={cx('social-icon-list')}>
      {ICON_LIST.map((icon) =>
        icon.icon ? (
          <Link to={icon.href} key={icon.name}>
            <FontAwesomeIcon className={cx('social-icon-item')} icon={icon.icon} />
          </Link>
        ) : (
          <Link to={icon.href} key={icon.name}>
            <div className={cx('social-icon-item')}>
              <img src={icon.logo} alt="" />
            </div>
          </Link>
        ),
      )}
    </div>
  );
}

export default SocialIconList;
