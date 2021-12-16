import React, { ReactSVGElement } from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.theme.bannercolor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 70px;
  border: 1px solid red;

  .banner-text {
    h1 {
      white-space: pre-wrap;
      font-size: 40px;
      color: ${(props) => props.theme.grayColors.gray900};
    }

    h2 {
      white-space: pre-wrap;
      margin-top: 10px;
      font-size: 16px;
      color: ${(props) => props.theme.grayColors.gray600};
    }
  }

  .banner-image {
  }
`;

interface IBannerTextProps {
  mainText: string;
  subText: string;
}

const Banner: React.FunctionComponent<IBannerTextProps> = ({
  mainText,
  subText,
}) => {
  return (
    <BannerWrapper>
      <div className="banner-text">
        {mainText.split("\n").map((line) => {
          return (
            <h1>
              {line}
              <br />
            </h1>
          );
        })}
        <h2>{subText}</h2>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
