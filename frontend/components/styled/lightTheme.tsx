import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  layout: {
    maxWidth: "1400px",
    small: {
      breakpoint: "340px",
      margin: "10px"
    },
    tablet: {
      breakpoint: "580px",
      margin: "10px"
    }
  },
  colors: {
    fill: {
      grayscale: {
        c100: "#ffffff", // white
        c150: "#F8F8F8", // almost white
        c200: "#f2f1f1", // notification background
        c300: "#e8e8e8", // intro bullet background
        c350: "#D4D4D4", // NumberedStepList background
        c400: "#8F8E8E", // drawer header background
        c500: "#737373", // avatar background
        c600: "#767676", // app header background
        c700: "#434343"
      },
      brand: {
        skin: "#FFD3B3",
        green: "#E0EEEA",
        yellow: "#F5F5E0",
        pink: "#F4E5DE",
        salmon: "#FED4C2"
      },
      colors: {
        red: "#FF8585",
        success: "#8DCE77",
        info: "#77A9CE",
        error: "#CE7777"
      }
    },
    text: {
      normal: "#434343",
      placeholder: "#C1C1C1"
    }
  }
};

export default lightTheme;
