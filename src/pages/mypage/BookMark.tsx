import { useState } from 'react';
import { BookMarkTabMenu } from 'utils/enum';
import cn from 'classnames';
import styles from 'css/pages/mypage/BookMark.module.scss';
import example2 from 'images/example/example2.svg';

export default function ProfileBookMark() {
    const [tabMenu, setTabMenu] = useState(BookMarkTabMenu.스터디);

    return (
        <div className={cn(styles.container)}>
            <h3 className={cn(styles.heading1, styles.title)}>북마크 목록</h3>
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
                        <span className={cn(styles.heading2)}>북마크 목록</span>
                        <a href="#!" className={styles.body3}>스터디 활동</a>
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
                                    [styles.on]: tabMenu === BookMarkTabMenu.스터디, 
                                    [styles.off]: tabMenu !== BookMarkTabMenu.스터디
                                }
                            )
                        }
                        onClick={() => setTabMenu(BookMarkTabMenu.스터디)}
                    >
                        스터디
                    </span>
                    <span 
                        className={
                            cn(
                                {
                                    [styles.on]: tabMenu === BookMarkTabMenu.멤버, 
                                    [styles.off]: tabMenu !== BookMarkTabMenu.멤버
                                }
                            )
                        }
                        onClick={() => setTabMenu(BookMarkTabMenu.멤버)}
                    >
                        맴버
                    </span>
                </div>
                {tabMenu === BookMarkTabMenu.스터디 && 
                <div className={cn(styles.studyBookMarkList)}>
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
                            <div className={styles.bookMark}>
                                <button className={cn(styles.on)}>&nbsp;</button>
                            </div>
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
                            <div className={styles.bookMark}>
                                <button className={cn(styles.on)}>&nbsp;</button>
                            </div>
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
                            <div className={styles.bookMark}>
                                <button className={cn(styles.on)}>&nbsp;</button>
                            </div>
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
                            <div className={styles.bookMark}>
                                <button className={cn(styles.on)}>&nbsp;</button>
                            </div>
                        </div>
                        <div className={cn(styles.bottom)}>
                            <span>모집인원</span>
                            <span>10/10</span>
                            <span className={cn(styles.status)}>포지션 현황</span>
                        </div>
                    </div>
                </div>}
                {tabMenu === BookMarkTabMenu.멤버 && 
                <div className={cn(styles.memberBookMarkList)}>
                    <div className={cn(styles.card)}>
                        <div className={cn(styles.info)}>
                            <span className={cn(styles.circle_50)} style={getImgStyle(example2)}>&nbsp;</span>
                            <div className={cn(styles.detail)}>
                                <div className={cn(styles.basic)}>
                                    <span className={cn(styles.name)}>이서윤</span>
                                    <span className={cn(styles.position)}>UX/UI 디자이너</span>
                                </div>
                                <div className={cn(styles.skillTagList)}>#Adobe Photoshop #Adobe Illustrator #Fram…</div>
                            </div>
                        </div>
                        <div className={cn(styles.bookMark)}>
                            <button className={cn(styles.on)}>&nbsp;</button>
                        </div>
                    </div>
                    <div className={cn(styles.card)}>
                        <div className={cn(styles.info)}>
                            <span className={cn(styles.circle_50)}>박</span>
                            <div className={cn(styles.detail)}>
                                <div className={cn(styles.basic)}>
                                    <span className={cn(styles.name)}>박우진</span>
                                    <span className={cn(styles.position)}>게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자</span>
                                </div>
                                <div className={cn(styles.skillTagList)}>#Spring #React.js #JavaScript #jQuery #C++ #…</div>
                            </div>
                        </div>
                        <div className={cn(styles.bookMark)}>
                            <button className={cn(styles.on)}>&nbsp;</button>
                        </div>
                    </div>
                    <div className={cn(styles.card)}>
                        <div className={cn(styles.info)}>
                            <span className={cn(styles.circle_50)}>박</span>
                            <div className={cn(styles.detail)}>
                                <div className={cn(styles.basic)}>
                                    <span className={cn(styles.name)}>박우진</span>
                                    <span className={cn(styles.position)}>게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자</span>
                                </div>
                                <div className={cn(styles.skillTagList)}>#Spring #React.js #JavaScript #jQuery #C++ #…</div>
                            </div>
                        </div>
                        <div className={cn(styles.bookMark)}>
                            <button className={cn(styles.on)}>&nbsp;</button>
                        </div>
                    </div>
                    <div className={cn(styles.card)}>
                        <div className={cn(styles.info)}>
                            <span className={cn(styles.circle_50)}>김</span>
                            <div className={cn(styles.detail)}>
                                <div className={cn(styles.basic)}>
                                    <span className={cn(styles.name)}>김은성</span>
                                    <span className={cn(styles.position)}>서비스 기획자 ∙ 백엔드 개발자</span>
                                </div>
                                <div className={cn(styles.skillTagList)}>#Spring #React.js #JavaScript #jQuery #C++ #…</div>
                            </div>
                        </div>
                        <div className={cn(styles.bookMark)}>
                            <button className={cn(styles.on)}>&nbsp;</button>
                        </div>
                    </div>
                </div>}
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