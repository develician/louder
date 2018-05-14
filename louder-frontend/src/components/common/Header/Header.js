import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <div className={cx('header')}>
    <Link to="/" className={cx('logo')}>
      Louder
    </Link>
    <div className={cx('right')}>
      <Link to="/auth/login" className={cx('menu')}>Login/Register</Link>
    </div>
  </div>
);

export default Header;