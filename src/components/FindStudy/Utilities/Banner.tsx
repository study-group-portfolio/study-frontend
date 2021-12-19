import React from "react";
import styled from "styled-components";

// Components
interface IBannerTextProps {
  mainText: string;
  subText: string;
  BannerImage: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Banner: React.FunctionComponent<IBannerTextProps> = ({
  mainText,
  subText,
  BannerImage,
}) => {
  return (
    <BannerSection>
      <div className="wrapper">
        <div className="banner-text">
          {mainText.split("\\n").map((line) => {
            return (
              <h1>
                {line}
                <br />
              </h1>
            );
          })}
          {subText.split("\\n").map((line) => {
            return (
              <h2>
                {line}
                <br />
              </h2>
            );
          })}
        </div>
        <div className="banner-image">
          <BannerImage />
        </div>
      </div>
    </BannerSection>
  );
};

export default Banner;

// Styled Components
const BannerSection = styled.section`
  width: 100%;
  height: 460px;
  background-color: ${(props) => props.theme.bannerBgColor};
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 1160px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
  }
`;
