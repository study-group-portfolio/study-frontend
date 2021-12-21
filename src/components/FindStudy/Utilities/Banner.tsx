import styled from "styled-components";

// Components
interface IBannerTextProps {
  mainText: string;
  subText: string;
  BannerImage: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function Banner({ mainText, subText, BannerImage }: IBannerTextProps) {
  return (
    <BannerSection>
      <Wrapper>
        <div>
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
        <div>
          <BannerImage />
        </div>
      </Wrapper>
    </BannerSection>
  );
}

export default Banner;

// Styled Components
const BannerSection = styled.section`
  width: 100%;
  height: 460px;
  background-color: ${(props) => props.theme.bannerBgColor};
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

const Wrapper = styled.div`
  width: 1160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
