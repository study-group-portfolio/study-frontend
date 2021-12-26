import styles from 'css/study/Detail.module.scss';
import cn from 'classnames';

import example1 from 'images/example/example1.svg';
import example2 from 'images/example/example2.svg';

function StudyDetail() {
    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.card)}>
                <div>
                    <span className={cn(styles.hit)}>지금까지 999+명이 조회했어요</span>
                    <button className={cn(styles.share)}>&nbsp;</button>
                </div>
                <div className={cn(styles.member)}>
                    <span className={cn(styles.title)}>함께 하게 될 맴버</span>
                    <span className={cn(styles.memberImg)} style={getImgStyle(example1)}>&nbsp;</span>
                    <span className={cn(styles.memberImg)}>김</span>
                    <span className={cn(styles.memberImg)} style={getImgStyle(example2)}>&nbsp;</span>
                    <span className={cn(styles.memberImg)}>이</span>
                    <span className={cn(styles.memberNum)}>+99</span>
                </div>
                <div className={cn(styles.btnBox)}>
                    <button className={cn(styles.btn, styles.secondary, styles.bookMark)}>북마크하기</button>
                    <button className={cn(styles.btn, styles.primary)}>지원하기</button>
                </div>
            </div>
            <div className={cn(styles.badgeSection)}>
                <span className={cn(styles.badge, styles.recruit)}>모집중</span>
                <span className={cn(styles.badge)}>사이드 프로젝트</span>
                <span className={cn(styles.badge)}>온/오프라인</span>
            </div>
            <div className={cn(styles.titleSection)}>
                <span className={cn(styles.title)}>포트폴리오용 프로젝트 팀원을 구합니다.</span>
            </div>
            <div className={cn(styles.profileSection)}>
                <span className={cn(styles.title)}>방장 프로필</span>
                <div className={cn(styles.content)}>
                    <span className={cn(styles.profileImg)}>김</span>
                    <p className={cn(styles.description)}>
                        안녕하세요. 저는 현재 국내 여행 플랫폼에 재직중인 개발자입니다.<br/>
                        회사에서 웹 백엔드 개발(Java/Spring/Oracle/MySQL)을 하고 있습니다.<br/>
                        새로운 것을 경험하고 도전하는 것을 좋아합니다. 가나다라마바사아자차카타파...
                    </p>
                    <div className={cn(styles.moreSection)}>
                        <button className={cn(styles.more)}>더 보기</button>
                    </div>
                    <div className={cn(styles.bottom)}>
                        <span className={cn(styles.tag)}>#React.js</span>
                        <span className={cn(styles.tag)}>#Spring</span>
                    </div>
                </div>
            </div>
            <div className={cn(styles.introduction)}>
                <span className={cn(styles.title)}>스터디 소개</span>
                <p className={cn(styles.content)}>
                    - 스터디 목적: 포트폴리오용 프로젝트<br/>
                    - 스터디 주제: 이커머스 서비스 개발<br/>
                    - 스터디 목표: AWS 배포<br/>
                    - 현 진행 상황: 기획 진행 중<br/>
                    - 기타: 현업 실무자, 취준생 누구든 환영합니다!
                </p>
            </div>
            <div className={cn(styles.process)}>
                <span className={cn(styles.title)}>진행 방식</span>
                <div className={cn(styles.content)}>온/오프라인 병행</div>
            </div>
            <div className={cn(styles.location)}>
                {/* 
                    진행방식이 온라인인 경우 → 활동지역은 보이지 않아야 함.
                    진행방식이 온라인이 아닌 경우 → 활동지역은 보여야 함.
                 */}
                <span className={cn(styles.title)}>활동 지역</span>
                <div className={cn(styles.content)}>서울</div>
            </div>
            <div className={cn(styles.expectPeriod)}>
                <span className={cn(styles.title)}>예상 진행 기간</span>
                <div className={cn(styles.content)}>'두 달' 동안 '주말과 주중'에 진행 예정입니다.</div>
            </div>
            <div className={cn(styles.role)}>
                <span className={cn(styles.title)}>업무 포지션</span>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.positionContent)}>
                        <div className={cn(styles.top)}>
                            <span className={cn(styles.name)}>백엔드 개발자</span>
                            <button className={cn(styles.btn, styles.complete)}>모집 마감</button>
                            <span className={cn(styles.number)}>1/1</span>
                        </div>
                        <div className={cn(styles.bottom)}>
                            <span className={cn(styles.tag)}>#Spring</span>
                            <span className={cn(styles.tag)}>#React.js</span>
                            <span className={cn(styles.tag)}>#JavaScript</span>
                            <span className={cn(styles.tag)}>#jQuery</span>
                            <span className={cn(styles.tag)}>#C++</span>
                            <span className={cn(styles.tag)}>#C#</span>
                            <span className={cn(styles.tag)}>#Java</span>
                            <span className={cn(styles.tag)}>#PHP</span>
                            <span className={cn(styles.tag)}>#Python</span>
                            <span className={cn(styles.tag)}>#Pycharm</span>
                        </div>
                    </div>
                </div>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.positionContent)}>
                        <div className={cn(styles.top)}>
                            <span className={cn(styles.name)}>프론트엔드 개발자</span>
                            <button className={cn(styles.btn)}>지원하기</button>
                            <span className={cn(styles.number)}>1/2</span>
                        </div>
                        <div className={cn(styles.bottom)}>
                            <span className={cn(styles.tag)}>#Spring</span>
                        </div>
                    </div>
                </div>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.positionContent)}>
                        <div className={cn(styles.top)}>
                            <span className={cn(styles.name)}>UX/UI 디자이너</span>
                            <button className={cn(styles.btn)}>지원하기</button>
                            <span className={cn(styles.number)}>0/2</span>
                        </div>
                        <div className={cn(styles.bottom)}>
                            <span className={cn(styles.tag)}>#미지정</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(styles.period)}>
                <span className={cn(styles.title)}>팀원 모집기간</span>
                <div className={cn(styles.content)}>2021.11.01 ~ 2021.11.22</div>
            </div>
            <div className={cn(styles.tool)}>
                <span className={cn(styles.title)}>협업 툴</span>
                <div className={cn(styles.content)}>
                    <ul>
                        <li>Google Meet</li>
                        <li>GitHub</li>
                        <li>Jira</li>
                    </ul>
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
    }
}

export default StudyDetail;