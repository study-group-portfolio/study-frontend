import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { ReactComponent as Profile } from "../../../images/profile.svg";
import rawData from "../../../rawData.json";

interface IMemberCard {
  id?: string | number;
  name: string;
  position: string[];
  interested: string[];
}

function MemberCard({ id, name, position, interested }: IMemberCard) {
  // Bookmark Toggle
  const [bookMark, setBookMark] = useState(false);
  const onBookmarkClick = () => {
    if (bookMark === false) {
      setBookMark(true);
    } else {
      setBookMark(false);
    }
  };

  return (
    <CardContainer>
      <ProfilePicture />
      <div onClick={onBookmarkClick}>
        {bookMark ? <BookMarkFill /> : <BookMark />}
      </div>
      <MemberName to="/">{name}</MemberName>
      <Position>{position}</Position>
      <TechSpec>#{interested}</TechSpec>
    </CardContainer>
  );
}

export default MemberCard;

// Styled Components
const CardContainer = styled.div`
  width: 373px;
  height: 198px;
  box-shadow: 1px 1px 8px 1px #e5e5e5;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProfilePicture = styled(Profile)`
  margin-bottom: 19px;
  width: 50px;
  height: 50px;
`;

const MemberName = styled(Link)`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.grayColors.gray900};
  margin-bottom: 4px;
`;

const Position = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: ${(props) => props.theme.grayColors.gray900};
  margin-bottom: 14px;
`;

const TechSpec = styled.span`
  font-size: 16px;
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
