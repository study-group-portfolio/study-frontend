import cn from 'classnames';
import styles from 'css/pages/mypage/profile/ElementRevision.module.scss';

export default function ProfileElementRevision() {
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
                        <a href="#" className={styles.body3}>북마크 목록</a>
                        <a href="#" className={styles.body3}>스터디 활동</a>
                    </div>
                    <div className={cn(styles.bottom)}>
                        <a href="#" className={cn(styles.body2)}>로그아웃</a>
                    </div>
                </div>
            </div>
            <div className={cn(styles.content)}>
                <div className={cn(styles.section)}>
                    <div className={cn(styles.subSection)}>
                        <h3 className={cn(styles.body7)}>프로필 이미지</h3>
                        <span className={cn(styles.circle_120, styles.body8)}>
                            김
                            <div className={cn(styles.filebox)}>
                                <label htmlFor="file">&nbsp;</label>
                                <input type="file" id="file" />
                            </div>
                        </span>
                    </div>
                    <div className={cn(styles.subSection)}>
                        <h3 className={cn(styles.body7)}>닉네임</h3>
                        <input type="text" className={cn(styles.nickName, styles.body3)} value="김은성"></input>
                        <p className={cn(styles.body2)}>한글/영어/숫자 혼용 가능, 최대 10자</p>
                    </div>
                    <div className={cn(styles.subSection)}>
                        <h3 className={cn(styles.body7)}>아이디</h3>
                        <p className={cn(styles.body3)}>example@studyit.com</p>
                    </div>
                    <div className={cn(styles.subSection)}>
                        <h3 className={cn(styles.body7)}>비밀번호</h3>
                        <a href="#" className={cn(styles.body4)}>비밀번호 변경하기</a>
                    </div>
                </div>
                <div className={cn(styles.btnBox)}>
                    <button className={cn(styles.btn, styles.error)}>탈퇴하기</button>
                    <button className={cn(styles.btn, styles.primary)}>저장하기</button>
                </div>
            </div>
        </div>
    )
}