import React from 'react';
import styles from './AuthForm.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const AuthForm = ({version}) => {
  if (version === "login") {
    return (
      <div className={cx('auth-form')}>
        <div className={cx('contents')}>
          <div className={cx('logo-wrapper')}>
            <div className={cx('logo')}>
              회원가입
            </div>
          </div>
          <div className={cx('label')}>
            아이디
          </div>
          <input type="text" name="username" className={cx('input')}/>
          <div className={cx('label')}>
            비밀번호
          </div>
          <input type="password" name="password" className={cx('input')}/>
          <div className={cx('button-wrapper')}>
            <div className={cx('button')}>
              로그인
            </div>
          </div>
          <div className={cx('desc-wrapper')}>
            <div className={cx('desc')}>
              아직 회원이 아니신가요?
              <Link to="/auth/register" className={cx('link')}>가입하러가기</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (version === "register") {
    return (
      <div className={cx('auth-form')}>
        <div className={cx('contents')}>
          <div className={cx('logo-wrapper')}>
            <div className={cx('logo')}>
              회원가입
            </div>
          </div>
          <div className={cx('label')}>
            아이디
          </div>
          <input type="text" name="username" className={cx('input')}/>
          <div className={cx('label')}>
            비밀번호
          </div>
          <input type="password" name="password" className={cx('input')}/>
          <div className={cx('label')}>
            비밀번호 확인
          </div>
          <input type="password" name="passwordCheck" className={cx('input')}/>
          <div className={cx('label')}>
            이메일
          </div>
          <input type="email" name="email" className={cx('input')}/>
          <div className={cx('button-wrapper')}>
            <div className={cx('button')}>
              회원가입
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default AuthForm;