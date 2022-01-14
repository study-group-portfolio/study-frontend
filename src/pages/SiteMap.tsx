import { Link } from "react-router-dom";
import { Path } from 'utils/enum';
import styles from 'css/pages/SiteMap.module.scss';
import cn from 'classnames';

function SiteMap() {
    return (
        <div className={cn(styles.container)}>
            <h1>사이트맵</h1>
            <div>
                <Link to={Path.메인}>메인</Link>
                <Link to={Path.로그인}>로그인</Link>
                <Link to={Path.회원가입}>회원가입</Link>
                <Link to={Path.비밀번호_찾기}>비밀번호 찾기</Link>
                <Link to={Path.비밀번호_재설정}>비밀번호 재설정</Link>
                <Link to={Path.이메일_인증}>이메일 인증</Link>
                <Link to={Path.회원가입_이메일_인증}>회원가입 이메일 인증</Link>
                <Link to={Path.스터디_목록}>스터디 목록</Link>
                <Link to={Path.스터디_생성}>스터디 생성</Link>
                <Link to={Path.스터디_수정}>스터디 수정</Link>
                <Link to={Path.스터디_상세}>스터디 상세</Link>
                <Link to={Path.맴버_목록}>맴버 목록</Link>
                <Link to={Path.맴버_상세}>맴버 상세</Link>
            </div>
        </div>
    )
}

export default SiteMap;