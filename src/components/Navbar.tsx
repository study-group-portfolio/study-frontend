import cn from 'classnames';
import styles from 'css/components/common/Navbar.module.scss';
import logo_studyit_logotype from 'images/logo/logo_studyit_logotype.svg';
import { NavLink } from "react-router-dom";
import AlarmBadge from "./common/AlarmBadge";
import { useState, useRef, useEffect } from 'react';
import { Path } from 'utils/enum';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch} from "redux/store";
import { logout } from 'redux/login/loginSlice';
import { remove as memberRemove } from 'redux/member/memberSlice';
import { remove as alarmRemove } from 'redux/alarm/alarmSlice';
import { useGoPage } from 'utils/custom-hook';

function Navbar() {
  // Redux 상태값
  const isLogin = useSelector((state: RootState) => state.loginStore.isLogin);
  const alarmList = useSelector((state: RootState) => state.alarmStore);
  const member = useSelector((state: RootState) => state.memberStore)
  // Redux 상태값

  // Path 함수 생성
  const goMyProfile = useGoPage(Path.내_프로필);
  const goBookMark = useGoPage(Path.북마크_목록);
  const goStudyActivity = useGoPage(Path.스터디_활동);
  // Path 함수 생성

  const dispatch = useDispatch<AppDispatch>();
  const profileButtonRef = useRef(Object());
  const [profileDropdown, setProfileDropdown] = useState(false);

  useEffect(() => {
    function clickHandleOutside(event: MouseEvent) {
      if (isLogin && profileButtonRef.current && !profileButtonRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    }

    document.addEventListener('click', clickHandleOutside);

    return () => {
      document.removeEventListener('click', clickHandleOutside);
    }
  })

  const onClickLogout = function() {
    dispatch(logout());
    dispatch(memberRemove());
    dispatch(alarmRemove());
    window.location.href = "/";
  }

  const onClickDropBox = function(goPage: () => void) {
    setProfileDropdown(false);
    goPage();
  }

  return (
  <div>
    <div className={cn(styles.container)}>
      <NavLink to={Path.메인} className={cn(styles.logoSection)}>
        <img className={cn(styles.logo)} src={logo_studyit_logotype} alt="로고"/>
      </NavLink>
      <div className={cn(styles.linkBox)}>
        {isLogin && <div><NavLink to={Path.스터디_생성} className={cn(styles.studyCreation)}>스터디 생성하기</NavLink></div>}
        <div><NavLink to={Path.스터디_목록} className={cn(styles.link)}>스터디 찾기</NavLink></div>
        <div><NavLink to={Path.맴버_목록} className={cn(styles.link)}>맴버 찾기</NavLink></div>
        {!isLogin && <div><NavLink to={Path.로그인} className={cn(styles.link)}>로그인</NavLink></div>}
        {isLogin && <div>
          <NavLink to="#!" className={cn(styles.link)}>
            알림
            <span className={cn(styles.alarmSection)}>
              {
                alarmList.memberAlarm.length > 0 && 
                alarmList.studyAlarm.length > 0 && 
                <AlarmBadge text={String(alarmList.memberAlarm.length + alarmList.studyAlarm.length)} />
              }
            </span>
          </NavLink>
        </div>}
        {isLogin && <div ref={profileButtonRef}>
          <button 
            className={cn(styles.circle_32)}
            onClick={() => setProfileDropdown(!profileDropdown)}
          >
            {member.nickname && member.nickname.charAt(0)}
          </button>
          {profileDropdown && 
          <div 
            className={cn(styles.alarmDropBox)}
          >
            <ul>
              <li onClick={() => onClickDropBox(goMyProfile)}>내 프로필</li>
              <li onClick={() => onClickDropBox(goBookMark)}>북마크 목록</li>
              <li onClick={() => onClickDropBox(goStudyActivity)}>스터디 활동</li>
              <li onClick={() => onClickLogout()}>로그아웃</li>
            </ul>
          </div>}
        </div>}
      </div>
    </div>
  </div>
  );
}

export default Navbar;
