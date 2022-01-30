import cn from 'classnames';
import styles from 'css/pages/mypage/profile/Profile.module.scss';
import Switch from 'components/common/Switch';
import img_pf_behance_40dp from 'images/img/img_pf_behance_40dp.svg';
import img_pf_etc_40dp from 'images/img/img_pf_etc_40dp.svg';
import img_pf_figma_40dp from 'images/img/img_pf_figma_40dp.svg';
import img_pf_github_40dp from 'images/img/img_pf_github_40dp.svg';
import img_pf_medium_40dp from 'images/img/img_pf_medium_40dp.svg';
import img_pf_tistory_40dp from 'images/img/img_pf_tistory_40dp.svg';

export default function Profile() {
    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.head, styles.section)}>
                <span>프로필을 공개하면 스터디 매칭율이 높아집니다.</span>
                <div>
                    <span>현재 공개 상태입니다.</span>
                    <Switch/>
                </div>
            </div>
            <div className={cn(styles.info, styles.section)}>
                <div className={cn(styles.introduction)}>
                    <h3>소개</h3>
                    <p>
                        안녕하세요. 저는 현재 국내 여행 플랫폼에 재직중인 3년차 백엔드 개발자입니다.  
                        회사에서는 웹 백엔드 개발(Java/Spring/Oracle/MySQL)을 하고 있습니다. 서비스 기획 경험이 있습니다. 
                        새로운 것을 경험하고 도전하는 것을 좋아합니다.회사에서는 웹 백엔드 개발(Java/Spring/Oracle/MySQL)을 하고 있습니다.
                    </p>
                </div>
                <div>
                    <h3>선호하는 진행 방식</h3>
                    <p>오프라인</p>
                </div>
                <div>
                    <h3>활동 지역</h3>
                    <p>서울,인천</p>
                </div>
            </div>
            <div className={cn(styles.position, styles.section)}>
                <h3 className={cn(styles.title)}>업무 포지션</h3>
                <div className={cn(styles.content)}>
                    <div className={cn(styles.positionContent)}>
                        <h3>백엔드 개발자</h3>
                        <div className={cn(styles.skillTags)}>
                            <span className={cn(styles.skillTag)}>Spring</span>
                            <span className={cn(styles.skillTag)}>React.js</span>
                            <span className={cn(styles.skillTag)}>JavaScript</span>
                            <span className={cn(styles.skillTag)}>jQuery</span>
                            <span className={cn(styles.skillTag)}>C++</span>
                            <span className={cn(styles.skillTag)}>C#</span>
                            <span className={cn(styles.skillTag)}>Java</span>
                            <span className={cn(styles.skillTag)}>PHP</span>
                            <span className={cn(styles.skillTag)}>Python</span>
                            <span className={cn(styles.skillTag)}>Pycharm</span>
                            <span className={cn(styles.skillTag)}>Python</span>
                            <span className={cn(styles.skillTag)}>Pycharm</span>
                            <span className={cn(styles.skillTag)}>Python</span>
                            <span className={cn(styles.skillTag)}>Pycharm</span>
                            <span className={cn(styles.skillTag)}>Python</span>
                            <span className={cn(styles.skillTag)}>Pycharm</span>
                        </div>
                    </div>
                    <div className={cn(styles.positionContent)}>
                        <h3>서비스 기획자</h3>
                        <div className={cn(styles.skillTags)}>
                            <span className={cn(styles.skillTag)}>Spring</span>
                            <span className={cn(styles.skillTag)}>React.js</span>
                            <span className={cn(styles.skillTag)}>JavaScript</span>
                            <span className={cn(styles.skillTag)}>jQuery</span>
                            <span className={cn(styles.skillTag)}>C++</span>
                            <span className={cn(styles.skillTag)}>C#</span>
                            <span className={cn(styles.skillTag)}>Java</span>
                            <span className={cn(styles.skillTag)}>PHP</span>
                            <span className={cn(styles.skillTag)}>Python</span>
                            <span className={cn(styles.skillTag)}>Pycharm</span>
                            <span className={cn(styles.skillTag)}>Spring</span>
                            <span className={cn(styles.skillTag)}>React.js</span>
                            <span className={cn(styles.skillTag)}>JavaScript</span>
                            <span className={cn(styles.skillTag)}>React.js</span>
                            <span className={cn(styles.skillTag)}>JavaScript</span>
                            <span className={cn(styles.skillTag)}>React.js</span>
                            <span className={cn(styles.skillTag)}>JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(styles.portfolio, styles.section)}>
                <h3>포트폴리오</h3>
                <div>
                    <img src={img_pf_github_40dp} />
                    <img src={img_pf_behance_40dp} />
                    <img src={img_pf_figma_40dp} />
                    <img src={img_pf_medium_40dp} />
                    <img src={img_pf_tistory_40dp} />
                    <img src={img_pf_etc_40dp} />
                </div>
            </div>
        </div>
    )
}