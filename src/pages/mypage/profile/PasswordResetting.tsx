import cn from 'classnames';
import styles from 'css/pages/mypage/profile/ElementRevision.module.scss';

export default function ProfilePasswordResetting() {
    return (
        <div className={cn(styles.container)}>
            <h3 className={cn(styles.heading1, styles.title)}>기본 정보 수정</h3>
            <div>
                <div className={cn(styles.sub)}>
                    <div className={cn(styles.top)}>
                        <span className={cn(styles.circle, styles.body1)}>김</span>
                        <button className={cn(styles.editImg)}>&nbsp;</button>
                        <div className={cn(styles.box)}>
                            <h3 className={cn(styles.heading2)}>김은성</h3>
                            <span className={cn(styles.body2)}>example@studyit.com</span>
                        </div>
                    </div>
                    <div className={cn(styles.middle)}>
                        <span className={cn(styles.heading2)}>내 프로필</span>
                        <a href="#!" className={styles.body3}>북마크 목록</a>
                        <a href="#!" className={styles.body3}>스터디 활동</a>
                    </div>
                    <div className={cn(styles.bottom)}>
                        <a href="#!" className={cn(styles.body2)}>로그아웃</a>
                    </div>
                </div>
            </div>
            <div className={cn(styles.content)}>
                <div className={cn(styles.section)}>
                    <div className={cn(styles.subSection)}>
                        <h3 className={cn(styles.body7)}>현재 비밀번호</h3>
                        <input type="text" className={cn(styles.nickName, styles.body3)} placeholder="현재 비밀번호를 입력해 주세요"></input>
                        <p className={cn(styles.body2)}>한글/영어/숫자 혼용 가능, 최대 10자</p>
                    </div>
                    <div className={cn(styles.subSection)}>
                        <h3 className={cn(styles.body7)}>새 비밀번호</h3>
                        <input type="text" className={cn(styles.nickName, styles.body3)} placeholder="새로운 비밀번호를 입력해 주세요"></input>
                        <input type="text" className={cn(styles.nickName, styles.body3)} placeholder="비밀번호를 한 번 더 입력해 주세요"></input>
                        <p className={cn(styles.body2)}>영문/숫자/특수문자 조합, 8자~32자</p>
                    </div>
                </div>
                <div className={cn(styles.btnBox)}>
                    <button className={cn(styles.btn, styles.primary)}>저장하기</button>
                </div>
            </div>
        </div>
    )
}