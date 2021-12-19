import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    kakaoColor: string;
    bannerBgColor: string;

    blueColors: {
      primaryColor: string;
      tagBgColor: string;
      tagTextColor: string;
    };

    redColors: {
      tagBgColor: string;
      tagTextColor: string;
    };

    grayColors: {
      gray900: string;
      gray800: string;
      gray700: string;
      gray600: string;
      gray500: string;
      gray400: string;
      gray300: string;
      gray200: string;
      gray100: string;
      gray000: string;
    };

    alertColors: {
      warning: {
        text: string;
        border: string;
        background: string;
      };
      error: {
        text: string;
        border: string;
        background: string;
      };
      success: {
        text: string;
        border: string;
        background: string;
      };
      informational: {
        text: string;
        border: string;
        background: string;
      };
    };
  }
}
