import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Tag } from "./Tag";

const StudyCard: React.FunctionComponent = () => {
  // Bookmark Toggle
  const [bookMark, setBookMark] = useState(false);
  const onBookmarkClick = () => {
    if (bookMark === false) {
      setBookMark(true);
    } else {
      setBookMark(false);
    }
  };

  // Position Status Toggle
  const [arrow, setArrow] = useState({ open: false });
  const onArrowClick = () => {
    setArrow(() => {
      if (!arrow.open) {
        return { open: true };
      }
      return { open: false };
    });
  };

  return (
    <CardContainer>
      <CardTitle to="/">포트폴리오 프로젝트 팀원 구합니다.</CardTitle>
      <div onClick={onBookmarkClick}>
        {bookMark ? <BookMarkFill /> : <BookMark />}
      </div>
      <CardHashTags>#Spring #React</CardHashTags>
      <div className="tags">
        <Tag text="모집중" />
        <Tag text="사이드 프로젝트" />
        <Tag text="온/오프라인" />
      </div>
      <hr />
      <div className="status">
        <PeopleGathered>
          모집 인원<span>2/5</span>
        </PeopleGathered>
        <PositionGatheredDropDown>
          포지션 현황
          <span onClick={onArrowClick}>
            {!arrow.open ? <ArrowDown /> : <ArrowUp />}
          </span>
        </PositionGatheredDropDown>
      </div>
    </CardContainer>
  );
};

export default StudyCard;

// Styled Components
const CardContainer = styled.div`
  width: 373px;
  height: 198px;
  box-shadow: 1px 1px 8px 1px #e5e5e5;
  padding: 20px;
  border-radius: 6px;
  position: relative;

  .tags {
    display: flex;
    margin-top: 35px;
    margin-bottom: 16px;
  }

  hr {
    border: 1px dashed ${(props) => props.theme.grayColors.gray200};
  }

  .status {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
  }
`;

const CardTitle = styled(Link)`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.grayColors.gray900};
  margin-bottom: 6px;
`;

const CardHashTags = styled.h2`
  font-size: 16px;
  font-weight: normal;
  color: ${(props) => props.theme.grayColors.gray400};
`;

const BookMark = styled(BsBookmark)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.primaryColor};
  position: absolute;
  top: 8%;
  right: 5%;
  cursor: pointer;
`;

const BookMarkFill = styled(BsBookmarkFill)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.primaryColor};
  position: absolute;
  top: 8%;
  right: 5%;
  cursor: pointer;
`;

const ArrowDown = styled(FaChevronDown)`
  color: ${(props) => props.theme.grayColors.gray400};
  width: 12px;
  cursor: pointer;
`;

const ArrowUp = styled(FaChevronUp)`
  color: ${(props) => props.theme.grayColors.gray400};
  width: 12px;
  cursor: pointer;
`;

const PeopleGathered = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.grayColors.gray500};

  span {
    margin-left: 8px;
  }
`;

const PositionGatheredDropDown = styled(PeopleGathered)`
  display: flex;
  align-items: center;
`;
