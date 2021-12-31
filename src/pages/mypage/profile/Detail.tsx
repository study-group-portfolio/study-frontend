import { useState } from 'react';
import cn from 'classnames';
import styles from 'css/pages/mypage/profile/Detail.module.scss';
import ToggleButton from 'components/EditStudy/ToggleButton';
import github from 'images/example/github.svg';
import notion from 'images/example/notion.svg';

export default function ProfileDetail() {
    const [toggle, setToggle] = useState(true);
    return (
        <div className={cn(styles.container)}>
            <h3 className={cn(styles.heading1, styles.title)}>내 프로필</h3>
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
                <div className={cn(styles.public, styles.common)}>
                    <span className={cn(styles.body3)}>프로필을 공개하면 스터디 매칭율이 높아집니다.</span>
                    <div className={cn(styles.right, styles.toggleBox)}>
                        <span className={cn(styles.body4)}>현재 공개 상태입니다</span>
                        <ToggleButton toggle={toggle} onChangeToggle={() => setToggle(!toggle)}></ToggleButton>
                    </div>
                </div>
                <div className={cn(styles.common)}>
                    <div className={cn(styles.introduction)}>
                        <h3 className={cn(styles.body6)}>소개</h3>
                        <p className={cn(styles.body5)}>
                            안녕하세요. 저는 현재 국내 여행 플랫폼에 재직중인 3년차 백엔드 개발자입니다.  회사에서는 웹 백엔드 개발(Java/Spring/Oracle/MySQL)을 하고 있습니다. 서비스 기획 경험이 있습니다. 새로운 것을 경험하고 도전하는 것을 좋아합니다.회사에서는 웹 백엔드 개발(Java/Spring/Oracle/MySQL)을 하고 있습니다.
                        </p>
                    </div>
                    <div className={cn(styles.likeSection)}>
                        <div className={cn(styles.subSection)}>
                            <h3 className={cn(styles.body6)}>선호하는 진행 방식</h3>
                            <p className={cn(styles.body5)}>오프라인</p>
                        </div>
                        <div className={cn(styles.subSection)}>
                            <h3 className={cn(styles.body6)}>활동 지역</h3>
                            <p className={cn(styles.body5)}>서울, 인천</p>
                        </div>
                    </div>
                </div>
                <div className={cn(styles.item, styles.common, styles.positionSection)}>
                    <h3 className={cn(styles.body6)}>업무 포지션</h3>
                    <div className={cn(styles.positionList)}>
                        <div className={cn(styles.position)}>
                            <p className={cn(styles.body3)}>백엔드 개발자</p>
                            <div className={cn(styles.tagList)}>
                                <span className={cn(styles.tag)}>#Spring</span>
                                <span className={cn(styles.tag)}>#React.js</span>
                                <span className={cn(styles.tag)}>#JavaScript</span>
                                <span className={cn(styles.tag)}>#jQuery</span>
                                <span className={cn(styles.tag)}>#C++</span>
                                <span className={cn(styles.tag)}>#C#</span>
                                <span className={cn(styles.tag)}>#Java</span>
                                <span className={cn(styles.tag)}>#PHP</span>
                                <span className={cn(styles.tag)}>#Python</span>
                                <span className={cn(styles.tag)}>#PyCharm</span>
                            </div>
                        </div>
                        <div className={cn(styles.position)}>
                            <p className={cn(styles.body3)}>백엔드 개발자</p>
                            <div className={cn(styles.tagList)}>
                                <span className={cn(styles.tag)}>#Spring</span>
                                <span className={cn(styles.tag)}>#React.js</span>
                                <span className={cn(styles.tag)}>#JavaScript</span>
                                <span className={cn(styles.tag)}>#jQuery</span>
                                <span className={cn(styles.tag)}>#C++</span>
                                <span className={cn(styles.tag)}>#C#</span>
                                <span className={cn(styles.tag)}>#Java</span>
                                <span className={cn(styles.tag)}>#PHP</span>
                                <span className={cn(styles.tag)}>#Python</span>
                                <span className={cn(styles.tag)}>#PyCharm</span>
                                <span className={cn(styles.tag)}>#C++</span>
                                <span className={cn(styles.tag)}>#Spring</span>
                                <span className={cn(styles.tag)}>#React.js</span>
                                <span className={cn(styles.tag)}>#JavaScript</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cn(styles.item, styles.common, styles.portfolioSection)}>
                    <h3 className={cn(styles.body6)}>포트폴리오</h3>
                    <div>
                        <button className={cn(styles.portfolio)} style={getImgStyle(github)}>&nbsp;</button>
                        <button className={cn(styles.portfolio)} style={getImgStyle(notion)}>&nbsp;</button>
                    </div>
                </div>
                <div>
                    <button className={cn(styles.right, styles.body4, styles.btn, styles.secondary)}>수정하기</button>
                </div>
                <div></div>
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