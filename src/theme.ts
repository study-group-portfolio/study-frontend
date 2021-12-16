import { DefaultTheme } from "styled-components";

export const baseTheme: DefaultTheme = {
  primaryColor: "#175cd3",
  secondaryColor: "#f6f6eb",
  kakaoColor: "#ffe812",
  bannercolor: "#f9fafb",

  grayColors: {
    gray900: "#101828",
    gray800: "#1d2939",
    gray700: "#344054",
    gray600: "#475467",
    gray500: "#667085",
    gray400: "#98a2b3",
    gray300: "#d0d5dd",
    gray200: "#e4e7ec",
    gray100: "#f2f4f7",
    gray000: "#f9fafb",
  },

  alertColors: {
    warning: {
      text: "#c6a537",
      border: "#ffe58f",
      background: "#fffbe6",
    },
    error: {
      text: "#f36355",
      border: "#ffccc7",
      background: "#fff2f0",
    },
    success: {
      text: "#4894c2",
      border: "#91d5ff",
      background: "#e6f7ff",
    },
    informational: {
      text: "#7bbc49",
      border: "#b7eb8f",
      background: "#f6ffed",
    },
  },
};
