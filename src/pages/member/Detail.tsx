import cn from 'classnames';
import styles from 'css/pages/member/Detail.module.scss';
import github from 'images/example/github.svg';
import notion from 'images/example/notion.svg';

function MemberDetail() {
    return (
        <div className={cn(styles.container)}>
            <div className={styles.info}>
                <div className={styles.card}>
                    <div className={styles.titleSection}>
                        <span className={cn(styles.num)}>지금까지 2번 스터디 했어요</span>
                        <button className={cn(styles.share)}>&nbsp;</button>
                    </div>
                    <div className={styles.portfolioSection}>
                        <h3 className={cn(styles.title)}>포트폴리오</h3>
                        <div className={cn(styles.content)}>
                            <span className={cn(styles.imgArea)} style={getImgStyle(github)}>&nbsp;</span>
                            <span className={cn(styles.imgArea)} style={getImgStyle(notion)}>&nbsp;</span>
                        </div>
                    </div>
                    <div className={styles.btnSection}>
                        <button className={cn(styles.btn, styles.secondary, styles.bookMarkOff)}>북마크하기</button>
                        <button className={cn(styles.btn, styles.primary)}>연락하기</button>
                    </div>
                </div>
            </div>
            <div className={cn(styles.contentSection)}>
                <div className={cn(styles.profileSection)}>
                    <span className={cn(styles.profileImg)}>유</span>
                </div>
                <div className={cn(styles.nameSection)}>
                    <h1 className={cn(styles.name)}>김은성</h1>
                </div>
                <div className={cn(styles.introudction)}>
                    <h5 className={styles.subTitle}>소개</h5>
                    <p className={cn(styles.content, styles.body)}>
                    안녕하세요. 저는 현재 국내 여행 플랫폼에 재직중인 3년차 백엔드 개발자입니다. 회사에서는 웹 백엔드 개발(Java/Spring/Oracle/MySQL)을 하고 있습니다. 서비스 기획 경험이 있습니다. 새로운 것을 경험하고 도전하는 것을 좋아합니다.회사에서는 웹 백엔드 개발(Java/Spring/Oracle/MySQL)을 하고 있습니다.
                    </p>
                </div>
                <div className={cn(styles.process)}>
                    <h5 className={styles.subTitle}>선호하는 진행방식</h5>
                    <p className={cn(styles.content, styles.body)}>오프라인</p>
                </div>
                <div className={cn(styles.location)}>
                    <h5 className={styles.subTitle}>활동 지역</h5>
                    <p className={cn(styles.content, styles.body)}>서울, 인천</p>
                </div>
                <div className={cn(styles.position)}>
                    <h5 className={styles.subTitle}>업무 포지션</h5>
                    <ul className={cn(styles.list)}>
                        <li>
                            <div className={cn(styles.card)}>
                                <h5 className={cn(styles.title)}>백엔드 개발자</h5>
                                <div className={cn(styles.bottom)}>
                                    <span className={cn(styles.tag)}>#Spring</span>
                                    <span className={cn(styles.tag)}>#React.js</span>
                                    <span className={cn(styles.tag)}>#JavaScript</span>
                                    <span className={cn(styles.tag)}>#JQuery</span>
                                    <span className={cn(styles.tag)}>#C++</span>
                                    <span className={cn(styles.tag)}>#C#</span>
                                    <span className={cn(styles.tag)}>#Java</span>
                                    <span className={cn(styles.tag)}>#PHP</span>
                                    <span className={cn(styles.tag)}>#Python</span>
                                    <span className={cn(styles.tag)}>#Pycharm</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={cn(styles.card)}>
                                <h5 className={cn(styles.title)}>서비스 기획자</h5>
                                <div className={cn(styles.bottom)}>
                                    <span className={cn(styles.tag)}>#Spring</span>
                                    <span className={cn(styles.tag)}>#React.js</span>
                                    <span className={cn(styles.tag)}>#JavaScript</span>
                                    <span className={cn(styles.tag)}>#JQuery</span>
                                    <span className={cn(styles.tag)}>#C++</span>
                                    <span className={cn(styles.tag)}>#C#</span>
                                    <span className={cn(styles.tag)}>#Java</span>
                                    <span className={cn(styles.tag)}>#PHP</span>
                                    <span className={cn(styles.tag)}>#Python</span>
                                    <span className={cn(styles.tag)}>#Pycharm</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cn(styles.line)}></div>
            <div className={cn(styles.studyList)}>
                <h5 className={cn(styles.title)}>스터디 활동</h5>
                <div className={cn(styles.list)}>
                    <div className={cn(styles.btnArea)}>
                        <button className={cn(styles.btn, styles.left)}>&nbsp;</button>
                    </div>
                    <div className={cn(styles.cardList)}>
                        <div className={cn(styles.card)}>
                            <div className={cn(styles.top)}>
                                <span className={cn(styles.title)}>알고리즘 스터디 구합니다.</span>
                                <button className={cn(styles.bookMark, styles.on)}>&nbsp;</button>
                            </div>
                            <p className={cn(styles.skills)}>#Spring #React.js</p>
                            <div className={cn(styles.tagList)}>
                                <span className={cn(styles.tag, styles.recruit)}>모집중</span>
                                <span className={cn(styles.tag)}>지식 공유 및 탐구</span>
                                <span className={cn(styles.tag)}>온라인</span>
                            </div>
                            <div className={cn(styles.bottom)}>
                                <span>모집인원</span>
                                <span className={cn(styles.num)}>0/5</span>
                                <span className={cn(styles.state)}>포지션 현황</span>
                            </div>
                        </div>
                        <div className={cn(styles.card)}>
                            <div className={cn(styles.top)}>
                                <span className={cn(styles.title)}>프론트엔드 스터디 함께 하실 분 모집합···</span>
                                <button className={cn(styles.bookMark, styles.off)}>&nbsp;</button>
                            </div>
                            <p className={cn(styles.skills)}>#Spring #React.js #JavaScript</p>
                            <div className={cn(styles.tagList)}>
                                <span className={cn(styles.tag, styles.complete)}>모집 완료</span>
                                <span className={cn(styles.tag)}>지식 공유 및 탐구</span>
                                <span className={cn(styles.tag)}>오프라인</span>
                            </div>
                            <div className={cn(styles.bottom)}>
                                <span>모집인원</span>
                                <span className={cn(styles.num)}>10/10</span>
                                <span className={cn(styles.state)}>포지션 현황</span>
                            </div>
                        </div>
                    </div>
                    <div className={cn(styles.btnArea)}>
                        <button className={cn(styles.btn, styles.right)}>&nbsp;</button>
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

export default MemberDetail;