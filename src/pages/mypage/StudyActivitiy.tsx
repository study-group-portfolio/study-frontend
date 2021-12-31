import { useState } from 'react';
import { StudyActivityTabMenu } from 'utils/enum';
import cn from 'classnames';
import styles from 'css/pages/mypage/StudyActivity.module.scss';

export default function StudyActivity() {
    const [tabMenu, setTabMenu] = useState(StudyActivityTabMenu.참여한_스터디);

    return (
        <div className={cn(styles.container)}>
            <h3 className={cn(styles.heading1, styles.title)}>스터디 활동</h3>
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
                        <a href="#!" className={styles.body3}>내 프로필</a>
                        <a href="#!" className={styles.body3}>북마크 목록</a>
                        <span className={cn(styles.heading2)}>스터디 활동</span>
                    </div>
                    <div className={cn(styles.bottom)}>
                        <a href="#!" className={cn(styles.body2)}>로그아웃</a>
                    </div>
                </div>
            </div>
            <div className={cn(styles.content)}>
                <div className={cn(styles.tabMenu)}>
                    <span 
                        className={
                            cn(
                                {
                                    [styles.on]: tabMenu === StudyActivityTabMenu.참여한_스터디, 
                                    [styles.off]: tabMenu !== StudyActivityTabMenu.참여한_스터디
                                }
                            )
                        }
                        onClick={() => setTabMenu(StudyActivityTabMenu.참여한_스터디)}
                    >
                        참여한 스터디
                    </span>
                    <span 
                        className={
                            cn(
                                {
                                    [styles.on]: tabMenu === StudyActivityTabMenu.생성한_스터디, 
                                    [styles.off]: tabMenu !== StudyActivityTabMenu.생성한_스터디
                                }
                            )
                        }
                        onClick={() => setTabMenu(StudyActivityTabMenu.생성한_스터디)}
                    >
                        생성한 스터디
                    </span>
                </div>
                <div className={cn(styles.studyActivityList)}>
                    <div className={cn(styles.card)}>
                        <div className={cn(styles.section)}>
                            <div className={cn(styles.subSection)}>
                                <div className={cn(styles.title)}>
                                    <h3>프론트엔드 스터디 함께 하실 분을 모집합니다.</h3>
                                    <div className={cn(styles.skillTagList)}>#Spring #React.js #JavaScript</div>
                                </div>
                                <div className={cn(styles.infoTagList)}>
                                    <span className={cn(styles.recruitedTag)}>모집 완료</span>
                                    <span className={cn(styles.infoTag)}>지식 공유 및 탐구</span>
                                    <span className={cn(styles.infoTag)}>오프라인</span>
                                </div>
                            </div>
                            {tabMenu === StudyActivityTabMenu.참여한_스터디 &&
                            <div className={styles.bookMark}>
                                <button className={cn(styles.on)}>&nbsp;</button>
                            </div>}
                            {tabMenu === StudyActivityTabMenu.생성한_스터디 &&
                            <div className={styles.edit}>
                                <button>&nbsp;</button>
                            </div>}
                        </div>
                        <div className={cn(styles.bottom)}>
                            <span>모집인원</span>
                            <span>10/10</span>
                            <span className={cn(styles.status)}>포지션 현황</span>
                        </div>
                    </div>
                    <div className={cn(styles.card)}>
                        <div className={cn(styles.section)}>
                            <div className={cn(styles.subSection)}>
                                <div className={cn(styles.title)}>
                                    <h3>프론트엔드 스터디 함께 하실 분을 모집합니다.</h3>
                                    <div className={cn(styles.skillTagList)}>#Spring #React.js #JavaScript</div>
                                </div>
                                <div className={cn(styles.infoTagList)}>
                                    <span className={cn(styles.recruitedTag)}>모집 완료</span>
                                    <span className={cn(styles.infoTag)}>지식 공유 및 탐구</span>
                                    <span className={cn(styles.infoTag)}>오프라인</span>
                                </div>
                            </div>
                            {tabMenu === StudyActivityTabMenu.참여한_스터디 &&
                            <div className={styles.bookMark}>
                                <button className={cn(styles.on)}>&nbsp;</button>
                            </div>}
                            {tabMenu === StudyActivityTabMenu.생성한_스터디 &&
                            <div className={styles.edit}>
                                <button>&nbsp;</button>
                            </div>}
                        </div>
                        <div className={cn(styles.bottom)}>
                            <span>모집인원</span>
                            <span>10/10</span>
                            <span className={cn(styles.status)}>포지션 현황</span>
                        </div>
                    </div>
                    <div className={cn(styles.card)}>
                        <div className={cn(styles.section)}>
                            <div className={cn(styles.subSection)}>
                                <div className={cn(styles.title)}>
                                    <h3>프론트엔드 스터디 함께 하실 분을 모집합니다.</h3>
                                    <div className={cn(styles.skillTagList)}>#Spring #React.js #JavaScript</div>
                                </div>
                                <div className={cn(styles.infoTagList)}>
                                    <span className={cn(styles.recruitedTag)}>모집 완료</span>
                                    <span className={cn(styles.infoTag)}>지식 공유 및 탐구</span>
                                    <span className={cn(styles.infoTag)}>오프라인</span>
                                </div>
                            </div>
                            {tabMenu === StudyActivityTabMenu.참여한_스터디 &&
                            <div className={styles.bookMark}>
                                <button className={cn(styles.on)}>&nbsp;</button>
                            </div>}
                            {tabMenu === StudyActivityTabMenu.생성한_스터디 &&
                            <div className={styles.edit}>
                                <button>&nbsp;</button>
                            </div>}
                        </div>
                        <div className={cn(styles.bottom)}>
                            <span>모집인원</span>
                            <span>10/10</span>
                            <span className={cn(styles.status)}>포지션 현황</span>
                        </div>
                    </div>
                    <div className={cn(styles.card)}>
                        <div className={cn(styles.section)}>
                            <div className={cn(styles.subSection)}>
                                <div className={cn(styles.title)}>
                                    <h3>프론트엔드 스터디 함께 하실 분을 모집합니다.</h3>
                                    <div className={cn(styles.skillTagList)}>#Spring #React.js #JavaScript</div>
                                </div>
                                <div className={cn(styles.infoTagList)}>
                                    <span className={cn(styles.recruitedTag)}>모집 완료</span>
                                    <span className={cn(styles.infoTag)}>지식 공유 및 탐구</span>
                                    <span className={cn(styles.infoTag)}>오프라인</span>
                                </div>
                            </div>
                            {tabMenu === StudyActivityTabMenu.참여한_스터디 &&
                            <div className={styles.bookMark}>
                                <button className={cn(styles.on)}>&nbsp;</button>
                            </div>}
                            {tabMenu === StudyActivityTabMenu.생성한_스터디 &&
                            <div className={styles.edit}>
                                <button>&nbsp;</button>
                            </div>}
                        </div>
                        <div className={cn(styles.bottom)}>
                            <span>모집인원</span>
                            <span>10/10</span>
                            <span className={cn(styles.status)}>포지션 현황</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function getImgStyle(img: string) {
    return {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
}