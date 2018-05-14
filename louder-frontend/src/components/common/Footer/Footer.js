import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => (
  <div className={cx('footer')}>
    <div className={cx('logo')}>
      Louder
    </div>
  </div>
);

export default Footer;