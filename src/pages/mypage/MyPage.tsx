import cn from 'classnames';
import styles from 'css/pages/mypage/MyPage.module.scss';
import CircleButton from 'components/common/CircleButton';
import { CircleButtonType } from 'utils/enum';
import ic_edit_20dp from 'images/icon/ic_edit_20dp.svg';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Profile from 'pages/mypage/profile/Profile';
import BookMark from 'pages/mypage/BookMark';
import StudyActivity from 'pages/mypage/StudyActivitiy';

export default function MyPage() {
    const { path, url } = useRouteMatch();
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
                                name="김"
                                fontSize={13}
                            />
                            <div>
                                <button>
                                    <img src={ic_edit_20dp} />
                                </button>
                            </div>
                        </div>
                        <div className={cn(styles.bottom)}>
                            <h3>김은성</h3>
                            <p>example@studyit.com</p>
                        </div>
                    </div>
                    <div className={cn(styles.linkList)}>
                        <Link to={`${url}/profile`}>내 프로필</Link>
                        <Link to="/mypage/bookMark">북마크 목록</Link>
                        <Link to="/mypage/studyAcitivity">스터디 활동</Link>
                    </div>
                    <div className={cn(styles.logout)}>
                        <span>로그아웃</span>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={`${path}/profile`} component={Profile} />
                <Route path={`${path}/bookMark`} component={BookMark} />
                <Route path={`${path}/studyAcitivity`} component={StudyActivity} />
            </Switch>
        </div>
    )
}