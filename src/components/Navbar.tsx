import cn from 'classnames';
import styles from 'css/components/common/Navbar.module.scss';
import logo_studyit_logotype from 'images/logo/logo_studyit_logotype.svg';
import { NavLink } from "react-router-dom";
import AlarmBadge from "./common/AlarmBadge";
import React, { useState, useRef, useEffect } from 'react';

function Navbar() {
  const profileButtonRef = useRef(Object());
  const [profileDropdown, setProfileDropdown] = useState(false);

  useEffect(() => {
    function clickHandleOutside(event: MouseEvent) {
      if (profileButtonRef.current && !profileButtonRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    }

    document.addEventListener('click', clickHandleOutside);

    return () => {
      document.removeEventListener('click', clickHandleOutside);
    }
  })

  return (
    <div>
    <div className={cn(styles.container)}>
      <NavLink to="/" className={cn(styles.logoSection)}>
        <img className={cn(styles.logo)} src={logo_studyit_logotype} />
      </NavLink>
      <div className={cn(styles.linkBox)}>
        <div><NavLink to="/" className={cn(styles.studyCreation)}>스터디 생성하기</NavLink></div>
        <div><NavLink to="/" className={cn(styles.link)}>스터디 찾기</NavLink></div>
        <div><NavLink to="/" className={cn(styles.link)}>맴버 찾기</NavLink></div>
        <div><NavLink to="/" className={cn(styles.link)}>알림<span className={cn(styles.alarmSection)}><AlarmBadge text="8" /></span></NavLink></div>
        <div ref={profileButtonRef}>
          <button 
            className={cn(styles.circle_32)}
            onClick={() => setProfileDropdown(!profileDropdown)}
          >
            김
          </button>
          {profileDropdown && 
          <div 
            className={cn(styles.alarmDropBox)}
          >
            <ul>
              <li>내 프로필</li>
              <li>북마크 목록</li>
              <li>스터디 활동</li>
              <li>로그아웃</li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
