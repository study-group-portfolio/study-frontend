import { useState } from "react";
import cn from "classnames";
import MemberCard from "components/common/MemberCard";
import styles from "../../css/pages/find/FindDetail.module.scss";
import InfoCircle from "../../images/info_circle.svg";
import SearchMan from "../../images/img/img_search_man.svg";
import img_testuser_01 from "images/img/img_testuser_01.svg";
import img_testuser_02 from "images/img/img_testuser_02.svg";
import { MemberToolTipBox } from "components/common/ToolTipBox";

export default function FindMember() {
  const [bookMark1, setBookMark1] = useState(false);
  const [bookMark2, setBookMark2] = useState(false);
  const [bookMark3, setBookMark3] = useState(false);
  const [memberTooltipShow, setMemberTooltipShow] = useState(false);
  return (
    <>
      <div className={cn(styles.bannerSection)}>
        <div className={cn(styles.bannerWrapper)}>
          <div className={cn(styles.bannerExp)}>
            <h1 className={cn(styles.bannerTitle)}>
              함께 달릴 멤버를
              <br />
              직접 선택해 보세요.
            </h1>
            <p className={cn(styles.bannerParagraph)}>
              함께 성장할 멤버들을 직접 골라보는 건 어때요?
              <br />
              준비된 멤버들이 기다리고 있어요.
            </p>
          </div>
          <img
            src={SearchMan}
            alt="search-man"
            className={cn(styles.bannerImage)}
          />
        </div>
      </div>
      <section className={cn(styles.container)}>
        <div className={cn(styles.titleSection)}>
          {!memberTooltipShow ? null : (
            <MemberToolTipBox text="최근 업데이트 순으로 노출됩니다." />
          )}
          <div className={cn(styles.title)}>
            <h1 className={cn(styles.titleText)}>멤버 찾기</h1>
            <img
              src={InfoCircle}
              alt="info-circle"
              className={cn(styles.infoCircle)}
              onMouseEnter={() => setMemberTooltipShow(true)}
              onMouseLeave={() => setMemberTooltipShow(false)}
            />
          </div>
        </div>
        <div className={cn(styles.CardGrid)}>
          <MemberCard
            name="김은성"
            profileImg={img_testuser_01}
            position="서비스 기획자 ∙ 백엔드 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark1}
            onClickBookMark={() => setBookMark1(!bookMark1)}
          />
          <MemberCard
            name="이서윤"
            profileImg={img_testuser_02}
            position="UX/UI 디자이너"
            skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
            bookMark={bookMark2}
            onClickBookMark={() => setBookMark2(!bookMark2)}
          />
          <MemberCard
            name="박우진"
            position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark3}
            onClickBookMark={() => setBookMark3(!bookMark3)}
          />
          <MemberCard
            name="김은성"
            profileImg={img_testuser_01}
            position="서비스 기획자 ∙ 백엔드 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark1}
            onClickBookMark={() => setBookMark1(!bookMark1)}
          />
          <MemberCard
            name="이서윤"
            profileImg={img_testuser_02}
            position="UX/UI 디자이너"
            skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
            bookMark={bookMark2}
            onClickBookMark={() => setBookMark2(!bookMark2)}
          />
          <MemberCard
            name="박우진"
            position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark3}
            onClickBookMark={() => setBookMark3(!bookMark3)}
          />
          <MemberCard
            name="김은성"
            profileImg={img_testuser_01}
            position="서비스 기획자 ∙ 백엔드 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark1}
            onClickBookMark={() => setBookMark1(!bookMark1)}
          />
          <MemberCard
            name="이서윤"
            profileImg={img_testuser_02}
            position="UX/UI 디자이너"
            skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
            bookMark={bookMark2}
            onClickBookMark={() => setBookMark2(!bookMark2)}
          />
          <MemberCard
            name="박우진"
            position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark3}
            onClickBookMark={() => setBookMark3(!bookMark3)}
          />
          <MemberCard
            name="김은성"
            profileImg={img_testuser_01}
            position="서비스 기획자 ∙ 백엔드 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark1}
            onClickBookMark={() => setBookMark1(!bookMark1)}
          />
          <MemberCard
            name="이서윤"
            profileImg={img_testuser_02}
            position="UX/UI 디자이너"
            skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
            bookMark={bookMark2}
            onClickBookMark={() => setBookMark2(!bookMark2)}
          />
          <MemberCard
            name="박우진"
            position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark3}
            onClickBookMark={() => setBookMark3(!bookMark3)}
          />
          <MemberCard
            name="김은성"
            profileImg={img_testuser_01}
            position="서비스 기획자 ∙ 백엔드 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark1}
            onClickBookMark={() => setBookMark1(!bookMark1)}
          />
          <MemberCard
            name="이서윤"
            profileImg={img_testuser_02}
            position="UX/UI 디자이너"
            skillTags="#Adobe Photoshop #Adobe Illustrator #Fra…"
            bookMark={bookMark2}
            onClickBookMark={() => setBookMark2(!bookMark2)}
          />
          <MemberCard
            name="박우진"
            position="게임 기획자 ∙ 프론트엔드 개발자 ∙ 자바 개발자"
            skillTags="#Spring #React.js #JavaScript #jQuery #C+…"
            bookMark={bookMark3}
            onClickBookMark={() => setBookMark3(!bookMark3)}
          />
        </div>
      </section>
    </>
  );
}
