// import original module declarations
import "styled-components";

// and extend them!
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    layout: {
      maxWidth: string;
      small: {
        breakpoint: string;
        margin: string;
      };
    };
    colors: {
      fill: {
        grayscale: {
          c100: string;
          c150: string;
          c200: string;
          c300: string;
          c350: string;
          c400: string;
          c500: string;
          c600: string;
          c700: string;
        };
        brand: {
          skin: string;
          green: string;
          yellow: string;
          pink: string;
          salmon: string;
        };
        colors: {
          red: string;
          success: string;
          info: string;
          error: string;
        };
      };
      text: {
        normal: string;
        placeholder: string;
      };
    };
  }
}
