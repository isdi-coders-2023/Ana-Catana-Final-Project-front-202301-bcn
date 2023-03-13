import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string; // black-grey
      errorColor: string; // red
      textColor: string;
      titleColor: string;
      inputPlaceholder: string; // C8C9CB
    };

    fontSizes: {
      primarySize: string; //16
      secondarySize: string; //18
      titleSize: string; //30
      buttonTextSize: string; //20
      logoSize: string;
    };

    fontStyles: {
      primaryStyle: string; // ROBOTO
      primaryWeight: number;
    };
  }
}
