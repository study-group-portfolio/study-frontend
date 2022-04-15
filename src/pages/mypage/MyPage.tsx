import cn from 'classnames';
import styles from 'css/pages/mypage/MyPage.module.scss';
import CircleButton from 'components/common/CircleButton';
import { CircleButtonType } from 'utils/enum';
import ic_edit_20dp from 'images/icon/ic_edit_20dp.svg';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Profile from 'pages/mypage/profile/Profile';
import BookMark from 'pages/mypage/BookMark';
import StudyActivity from 'pages/mypage/StudyActivitiy';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import ProfileElementRevision from 'pages/mypage/profile/ElementRevision';
import ProfilePasswordResetting from './profile/PasswordResetting';
import { logout } from 'redux/login/loginSlice';
import { remove as memberRemove } from 'redux/member/memberSlice';
import { remove as alarmRemove } from 'redux/alarm/alarmSlice';


export default function MyPage() {
    const { path, url } = useRouteMatch();
    const member = useSelector((state: RootState) => state.memberStore)
    const dispatch = useDispatch<AppDispatch>();


    const onClickLogout = function() {
        dispatch(logout());
        dispatch(memberRemove())
        dispatch(alarmRemove());
        window.location.href = "/";
      }

    return (
        <div className={cn(styles.container)}>
            <h3 className={cn(styles.title)}>MyPage</h3>
            <div className={cn(styles.side)}>
                <div className={cn(styles.card)}>
                    <div className={cn(styles.info)}>
                        <div className={cn(styles.top)}>
                            <CircleButton
                                radius={40}
                                circleButtonType={CircleButtonType.일반형}
                                name={member.nickname && member.nickname.charAt(0)}
                                fontSize={13}
                            />
                            <div>
                            <Link to={`${path}/elementRevision`}>
                            <img src={ic_edit_20dp} />
                            </Link>
                                {/* <button>
                                    <img src={ic_edit_20dp} />
                                </button> */}
                            </div>
                        </div>
                        <div className={cn(styles.bottom)}>
                            <h3>{member.nickname}</h3>
                            <p>{member.email}</p>
                        </div>
                    </div>
                    <div className={cn(styles.linkList)}>
                        <Link to={`${url}/profile`}>내 프로필</Link>
                        <Link to="/mypage/bookMark">북마크 목록</Link>
                        <Link to="/mypage/studyAcitivity">스터디 활동</Link>
                    </div>
                    <div className={cn(styles.logout)}>
                        <span onClick={()=> onClickLogout()}>로그아웃</span>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={`${path}/profile`} component={Profile} />
                <Route path={`${path}/bookMark`} component={BookMark} />
                <Route path={`${path}/studyAcitivity`} component={StudyActivity} />
                <Route path={`${path}/elementRevision`} component={ProfileElementRevision} />
                <Route path={`${path}/ProfilePasswordResetting`} component={ProfilePasswordResetting} />
            </Switch>
        </div>
    )
}
