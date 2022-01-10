import cn from "classnames";
import MemberCard from "components/common/MemberCard";
import styles from "../../css/pages/find/FindMember.module.scss";
import InfoCircle from "../../images/info_circle.svg";
import SearchMan from "../../images/search_man.svg";

export default function FindMember() {
  return (
    <section className={cn(styles.container)}>
      <section className={cn(styles.bannerSection)}>
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
      </section>
      <section className={cn(styles.wrapper)}>
        <div className={cn(styles.title)}>
          <h1 className={cn(styles.titleText)}>멤버 찾기</h1>
          <img
            src={InfoCircle}
            alt="info-circle"
            className={cn(styles.infoCircle)}
          />
        </div>
        <div className={cn(styles.grid)}>
          <MemberCard
            name="r"
            position="r"
            skillTags="r"
            bookMark={false}
            onClickBookMark={() => null}
          />
          <MemberCard
            name="r"
            position="r"
            skillTags="r"
            bookMark={false}
            onClickBookMark={() => null}
          />
        </div>
      </section>
    </section>
  );
}
