import styles from 'css/pages/study/Detail.module.scss';
import cn from 'classnames';
import { useState } from 'react';
import Badge from 'components/common/Badge';
import CircleButton from 'components/common/CircleButton';
import PositionCard from 'components/common/PositionCard';
import Button from 'components/common/Button';
import { ButtonType } from 'utils/enum';
import { BadgeType } from 'utils/enum';
import ic_share_black_20dp from 'images/icon/ic_share_black_20dp.svg';
import example1 from 'images/example/example1.svg';
import example2 from 'images/example/example2.svg';
import ic_bookmark_off_24dp from 'images/icon/ic_bookmark_off_24dp.svg';

function StudyDetail() {
    const [studyResponse, setStudyResponse] = useState({});

    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.content)}>
                <div className={cn(styles.head)}>
                    <div className={cn(styles.badges)}>
                        <Badge badgeType={BadgeType.모집중} />
                        <Badge badgeType={BadgeType.사이드프로젝트} />
                        <Badge badgeType={BadgeType.온오프라인} />
                    </div>
                    <h3>포트폴리오용 프로젝트 팀원 구합니다.</h3>
                </div>
                <div className={cn(styles.body)}>
                    <div className={cn(styles.section)}>
                        <h3>방장 프로필</h3>
                        <div className={cn(styles.profileContent)}>
                            <div className={cn(styles.profileBody)}>
                                <div className={cn(styles.profileCircleSection)}>
                                    <CircleButton radius={24} name="김" height={18} />
                                </div>
                                <p>
                                    안녕하세요. 저는 현재 국내 여행 플랫폼에 재직중인 3년차 백엔드 개발자입니다. 
                                    회사에서는 웹 백엔드 개발(Java/Spring/Oracle/MySQL)을 하고 있습니다.
                                    새로운 것을 경험하고 도전하는 것을 좋아합니다. 가나다라마바사아자차카타파하거너더러머버서
                                </p>
                                <div className={cn(styles.skillTags)}>
                                    <span className={cn(styles.txt)}>React.js</span>
                                    <span className={cn(styles.txt)}>Spring</span>
                                </div>
                            </div>
                            <a href="#!">더 보기</a>
                        </div>
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>스터디 소개</h3>
                        <div className={cn(styles.subContent)}>
                            - 스터디 목적 : 포트폴리오용 프로젝트
                            <br/>
                            - 스터디 주제 : 이커머스 서비스 개발
                            <br/>
                            - 스터디 목표 : AWS 배포
                            <br/>
                            - 현 진행 상황 : 기획 진행 중- 본인 포지션 설명 : 백엔드 개발자, spring 사용
                            <br/>
                            - 기타: 현업 실무자, 취준생 누구든 환영입니다!
                        </div>
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>진행방식</h3>
                        <div className={cn(styles.subContent)}>
                            온/오프라인 병행
                        </div>
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>활동 지역</h3>
                        <div className={cn(styles.subContent)}>
                            서울
                        </div>
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>예상 진행 기간</h3>
                        <div className={cn(styles.subContent)}>
                            '두 달' 동안 '주말과 주중' 에 진행 예정입니다.
                        </div>
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>모집포지션</h3>
                        <div className={cn(styles.positionSection)}>
                            <PositionCard 
                                name='백엔드 개발자' 
                                skillTagList={[
                                    {
                                        name: 'Spring'
                                    },
                                    {
                                        name: 'React.js'
                                    },
                                    {
                                        name: 'JavaScript'
                                    },
                                    {
                                        name: 'jQuery'
                                    },
                                    {
                                        name: 'C++'
                                    },
                                    {
                                        name: 'C#'
                                    },
                                    {
                                        name: 'java'
                                    },
                                    {
                                        name: 'PHP'
                                    },
                                    {
                                        name: 'Python'
                                    },
                                    {
                                        name: 'Pycharm'
                                    },
                                ]} 
                                recruitmentCount={1} 
                                currentCount={1} 
                            />
                            <PositionCard 
                                name='프론트엔드 개발자' 
                                skillTagList={[
                                    {
                                        name: 'Spring'
                                    }
                                ]} 
                                recruitmentCount={2} 
                                currentCount={1} 
                            />
                            <PositionCard 
                                name='UX/UI 디자이너' 
                                skillTagList={[
                                    {
                                        name: '미지정'
                                    }
                                ]} 
                                recruitmentCount={2} 
                                currentCount={0} 
                            />
                        </div>
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>모집기간</h3>
                        <div className={cn(styles.subContent)}>
                            '두 달' 동안 '주말과 주중' 에 진행 예정입니다.
                        </div>
                    </div>
                    <div className={cn(styles.section)}>
                        <h3>협업 툴</h3>
                        <ul className={cn(styles.collaborateToolContent)}>
                            <li>Google Meet</li>
                            <li>GitHub</li>
                            <li>Jira</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cn(styles.side)}>
                <div className={cn(styles.card)}>
                    <div className={cn(styles.head)}>
                        <h3>지금까지 999+명이 조회했어요</h3>
                        <CircleButton
                            radius={20}
                            name=""
                            height={20}
                            imgUrl={ic_share_black_20dp}
                        />
                    </div>
                    <div className={cn(styles.content)}>
                        <div className={cn(styles.body)}>
                            <h3>함께 하게 될 맴버</h3>
                            <div className={cn(styles.profileContent)}>
                                <CircleButton
                                    radius={25}
                                    name=""
                                    height={50}
                                    imgUrl={example1}
                                    imgStyle={{
                                        borderRadius: '25px',
                                        width: '50px',
                                        height: '50px',
                                    }}
                                />
                                <CircleButton
                                    radius={25}
                                    name="김"
                                    height={18}
                                />
                                <CircleButton
                                    radius={25}
                                    name=""
                                    height={50}
                                    imgUrl={example2}
                                    imgStyle={{
                                        borderRadius: '25px',
                                        width: '50px',
                                        height: '50px',
                                    }}
                                />
                                <CircleButton
                                    radius={25}
                                    name="이"
                                    height={18}
                                />
                                <CircleButton
                                    radius={25}
                                    name="+99"
                                    height={20}
                                />
                            </div>
                        </div>
                        <div className={cn(styles.btnContent)}>
                            <Button 
                                img={ic_bookmark_off_24dp}
                                buttonName="북마크하기" 
                                buttonType={ButtonType.서브} 
                            />
                            <Button buttonName="지원하기" buttonType={ButtonType.기본} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyDetail;