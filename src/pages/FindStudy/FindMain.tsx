import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "../../css/pages/find/FindMain.module.scss";
import Slider from "components/common/Slider";
import MemberCard from "components/common/MemberCard";
import StudyCard from "components/common/StudyCard";
import { Link } from "react-router-dom";
import { StudyCardType, RecruitType, StudyType, ProcessType } from "utils/enum";
import { PositionState } from "utils/interface";
import Building from "../../images/building.svg";
import InfoCircle from "../../images/info_circle.svg";
import { Path } from "utils/enum";
import {
  StudyToolTipBox,
  MemberToolTipBox,
} from "components/common/ToolTipBox";

import img_testuser_01 from "images/img/img_testuser_01.svg";
import img_testuser_02 from "images/img/img_testuser_02.svg";
import { getStudyList } from "api/studyAPI";
interface StduyDetail {
  bookmarkId: number
  bookmarkState: string
  content: string;
  createDate: string;
  duration: string;
  id: number;
  modifiedDate: string;
  positions: string[]
  profileShare: boolean;
  receptionEnd: string;
  receptionStart: string;
  region: string;
  status: ProcessType;
  studyDay: string;
  title: string;
  tools: string[];
  type: StudyType;
}

const FindMain: React.FunctionComponent = () => {
  const [bookMark1, setBookMark1] = useState(false);
  const [bookMark2, setBookMark2] = useState(false);
  const [bookMark3, setBookMark3] = useState(false);
  const [bookMark4, setBookMark4] = useState(false);
  const [bookMark5, setBookMark5] = useState(false);
  const [seleted, setSelected] = useState(false);
  const [studyTooltipShow, setStudyTooltipShow] = useState<boolean>(false);
  const [memberTooltipShow, setMemberTooltipShow] = useState<boolean>(false);

  const [studyList, setStudyList] = useState<StduyDetail[]>([]);

  const [bookMark6, setBookMark6] = useState(false);

  useEffect(() => {
    (async function() {
      try {
        const { data: { data: { content }} } = await getStudyList(0, 12);
        console.log(content);
        setStudyList(content);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [])

  return (
    <div>
      <div className={cn(styles.bannerSection)}>
        <div className={cn(styles.bannerWrapper)}>
          <div className={cn(styles.bannerExp)}>
            <h1 className={cn(styles.bannerTitle)}>
              ?????? ?????? ?????????
              <br />
              ?????? ????????? ?????????.
            </h1>
            <p className={cn(styles.bannerParagraph)}>
              ?????? ????????? ???????????? ?????? ???????????? ??? ??????????
              <br />
              ????????? ???????????? ???????????? ?????????.
            </p>
          </div>
          <img
            src={Building}
            alt="search-man"
            className={cn(styles.bannerImage)}
          />
        </div>
      </div>
      <section className={cn(styles.container)}>
        <div className={cn(styles.wrapper)}>
          <div className={cn(styles.titleSection)}>
            {!studyTooltipShow ? null : (
              <StudyToolTipBox text="?????? ?????? ????????? ???????????????." />
            )}
            <div className={cn(styles.title)}>
              <h1 className={cn(styles.titleText)}>????????? ??????</h1>
              <img
                src={InfoCircle}
                alt="info-circle"
                onMouseEnter={() => setStudyTooltipShow(true)}
                onMouseLeave={() => setStudyTooltipShow(false)}
              />
            </div>
            <Link to={Path.?????????_??????}>????????????</Link>
          </div>
          <Slider>
            {/* {studyList.length > 0 && studyList.map((study: StduyDetail, key: number) => {
              const currentNum = study.positions.reduce((acc: number, position: any) => acc + Number(position.totalCount || 0), 0);
              const totalNum = study.positions.reduce((acc: number, position: any) => acc + Number(position.count), 0);
              const positionStateList: PositionState[] = study.positions.map((position: any) => {
                return {
                  name: position.position,
                  currentNum: position.totalCount || 0,
                  totalNum: position.count || 0,
                };
              })
              
              return (<StudyCard
                key={key}
                studySeq={study.id}
                title={study.title}
                studyCardType={StudyCardType.????????????}
                recruitType={RecruitType.?????????}
                studyType={study.type}
                processType={study.status}
                bookMark={Boolean(study.bookmarkState)}
                onClickBookMark={() => setBookMark4(!bookMark4)}
                currentNum={currentNum}
                totalNum={totalNum}
                positionStateList={positionStateList}
              />)
            })} */}
          </Slider>
        </div>
        <div className={cn(styles.wrapper)}>
          <div className={cn(styles.wrapper)}>
            <div className={cn(styles.titleSection)}>
              {!memberTooltipShow ? null : (
                <MemberToolTipBox text="?????? ???????????? ????????? ???????????????." />
              )}
              <div className={cn(styles.title)}>
                <h1 className={cn(styles.titleText)}>?????? ??????</h1>
                <img
                  src={InfoCircle}
                  alt="info-circle"
                  className={cn(styles.infoCircle)}
                  onMouseEnter={() => setMemberTooltipShow(true)}
                  onMouseLeave={() => setMemberTooltipShow(false)}
                />
              </div>
              <Link to={Path.??????_??????}>????????????</Link>
            </div>
            <Slider>
              <MemberCard
                name="?????????"
                profileImg={img_testuser_01}
                position="????????? ????????? ??? ????????? ?????????"
                skillTags="#Spring #React.js #JavaScript #jQuery #C+???"
                bookMark={bookMark1}
                onClickBookMark={() => setBookMark1(!bookMark1)}
              />
              <MemberCard
                name="?????????"
                profileImg={img_testuser_02}
                position="UX/UI ????????????"
                skillTags="#Adobe Photoshop #Adobe Illustrator #Fra???"
                bookMark={bookMark2}
                onClickBookMark={() => setBookMark2(!bookMark2)}
              />
              <MemberCard
                name="?????????"
                position="?????? ????????? ??? ??????????????? ????????? ??? ?????? ?????????"
                skillTags="#Spring #React.js #JavaScript #jQuery #C+???"
                bookMark={bookMark3}
                onClickBookMark={() => setBookMark3(!bookMark3)}
              />
              <MemberCard
                name="?????????"
                profileImg={img_testuser_01}
                position="????????? ????????? ??? ????????? ?????????"
                skillTags="#Spring #React.js #JavaScript #jQuery #C+???"
                bookMark={bookMark1}
                onClickBookMark={() => setBookMark1(!bookMark1)}
              />
              <MemberCard
                name="?????????"
                profileImg={img_testuser_02}
                position="UX/UI ????????????"
                skillTags="#Adobe Photoshop #Adobe Illustrator #Fra???"
                bookMark={bookMark2}
                onClickBookMark={() => setBookMark2(!bookMark2)}
              />
              <MemberCard
                name="?????????"
                position="?????? ????????? ??? ??????????????? ????????? ??? ?????? ?????????"
                skillTags="#Spring #React.js #JavaScript #jQuery #C+???"
                bookMark={bookMark3}
                onClickBookMark={() => setBookMark3(!bookMark3)}
              />
              <MemberCard
                name="?????????"
                profileImg={img_testuser_01}
                position="????????? ????????? ??? ????????? ?????????"
                skillTags="#Spring #React.js #JavaScript #jQuery #C+???"
                bookMark={bookMark1}
                onClickBookMark={() => setBookMark1(!bookMark1)}
              />
              <MemberCard
                name="?????????"
                profileImg={img_testuser_02}
                position="UX/UI ????????????"
                skillTags="#Adobe Photoshop #Adobe Illustrator #Fra???"
                bookMark={bookMark2}
                onClickBookMark={() => setBookMark2(!bookMark2)}
              />
              <MemberCard
                name="?????????"
                position="?????? ????????? ??? ??????????????? ????????? ??? ?????? ?????????"
                skillTags="#Spring #React.js #JavaScript #jQuery #C+???"
                bookMark={bookMark3}
                onClickBookMark={() => setBookMark3(!bookMark3)}
              />
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindMain;
