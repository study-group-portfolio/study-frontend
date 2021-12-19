import React from "react";
import styled from "styled-components";

interface ITag {
  text: string;
}

export const Tag: React.FunctionComponent<ITag> = ({ text }) => {
  return <TagContainer>{text}</TagContainer>;
};

const TagContainer = styled.span`
  display: block;
  width: fit-content;
  height: 26px;
  padding: 4px 8px;
  margin-right: 12px;
  font-size: 12px;
  background-color: ${(props) => props.theme.blueColors.tagBgColor};
  color: ${(props) => props.theme.blueColors.tagTextColor};
  border-radius: 6px;
`;
