import { useState } from 'react';
import cn from 'classnames';
import styles from 'css/pages/mypage/profile/Revision.module.scss';
import ToggleButton from 'components/EditStudy/ToggleButton';
import SelectBox from 'components/EditStudy/SelectBox';

export default function ProfileRevision() {
    const [toggle, setToggle] = useState(false);
    const placeholder = `예시)
- 스터디 하고 싶은 분야에 대한 경험과 목표 등에 대해 간단하게 작성해 주세요
- 3~5줄로 요약하여 작성하는 것을 추천합니다.
    `
    return (
        <div className={cn(styles.container)}>
            <h3 className={cn(styles.heading1, styles.section1)}>내 프로필</h3>
            <div>
                <div className={cn(styles.section2)}>
                    <div className={cn(styles.section21)}>
                        <span className={cn(styles.circle_80, styles.body1)}>김</span>
                        <button className={cn(styles.editImg)}>&nbsp;</button>
                        <div className={cn(styles.section211)}>
                            <h3 className={cn(styles.heading2)}>김은성</h3>
                            <span className={cn(styles.body2)}>example@studyit.com</span>
                        </div>
                    </div>
                    <div className={cn(styles.section22)}>
                        <span className={cn(styles.heading2)}>내 프로필</span>
                        <a className={styles.body3}>북마크 목록</a>
                        <a className={styles.body3}>스터디 활동</a>
                    </div>
                    <div className={cn(styles.section23)}>
                        <a className={cn(styles.body2)}>로그아웃</a>
                    </div>
                </div>
            </div>
            <div className={cn(styles.section3)}>
                <div className={cn(styles.section31)}>
                    <span className={cn(styles.body3)}>프로필을 공개하면 스터디 매칭율이 높아집니다.</span>
                    <div className={cn(styles.section311)}>
                        <span className={cn(styles.body4)}>현재 공개 상태입니다</span>
                        <ToggleButton toggle={toggle} onChangeToggle={() => setToggle(!toggle)}></ToggleButton>
                    </div>
                </div>
                <div className={cn(styles.section32)}>
                    <div>
                        <h3 className={cn(styles.body7)}>소개</h3>
                        <div className={cn(styles.section321)}>
                            <textarea placeholder={placeholder}></textarea>
                            <span className={cn(styles.body9)}>(0/200)</span>
                        </div>
                    </div>
                    <div>
                        <h3 className={cn(styles.body7)}>선호하는 진행방식</h3>
                        <div className={cn(styles.section322)}>
                            <button className={cn(styles.on)}>온라인</button>
                            <button className={cn(styles.off)}>오프라인</button>
                            <button className={cn(styles.off)}>온/오프라인 병행</button>
                        </div>
                    </div>
                    <div>
                        <h3 className={cn(styles.body7)}>활동 지역</h3>
                        <SelectBox
                            width="820px"
                            marginTop="0px"
                            placeholder="지역을 선택해 주세요"
                            items={['서울']}
                            type="O"
                        ></SelectBox>
                    </div>
                    <div>
                        <h3 className={cn(styles.body7)}>업무 포지션</h3>
                        <div className={cn(styles.section323)}>
                            <div>
                                <SelectBox
                                    width="820px"
                                    marginTop="0px"
                                    placeholder="지역을 선택해 주세요"
                                    items={['서울']}
                                    type="O"
                                ></SelectBox>
                                <SelectBox
                                    width="820px"
                                    marginTop="0px"
                                    placeholder="지역을 선택해 주세요"
                                    items={['서울']}
                                    type="O"
                                ></SelectBox>
                            </div>
                            <button>선택완료</button>
                            <span>선택 완료를 눌러 추가해 주세요</span>
                        </div>
                    </div>
                    <div>
                        <h3 className={cn(styles.body7)}>포트폴리오</h3>
                        <div className={cn(styles.section324)}>
                            <div>
                                <input type="text" placeholder="해당 페이지 url을 입력해 주세요" />
                                <button>추가하기</button>
                            </div>
                            <ul>
                                <li>https://studyit.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cn(styles.section33)}>
                    <button>저장하기</button>
                </div>
            </div>
        </div>
    )
}