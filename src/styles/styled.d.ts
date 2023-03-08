import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string; // verd
      secondary: string; // black-grey
      errorColor: string; // red
      inputPlaceholder: string; // C8C9CB
    };

    fontSizes: {
      primarySize: string; //16
      secondarySize: string; //18
      titleSize: string; //30
      buttonTextSize: string; //20
    };

    fontStyles: {
      primaryStyle: string; // ROBOTO
      primaryWeight: number;
    };
  }
}
