interface Theme {
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  palette: {
    background: {
      primary: string;
      secondary: string;
    };
    typography: {
      default: string;
      title: string;
    };
    success: {
      primary: string;
      secondary: string;
      contrast: string;
    };
  };
  typography: {
    fontFamily: string;
    h1: {
      fontSize: string;
      fontWeight: string | number;
      lineHeight: string | number;
    };
    h2: {
      fontSize: string;
      fontWeight: string | number;
      lineHeight: string | number;
    };
    h3: {
      fontSize: string;
      fontWeight: string | number;
      lineHeight: string | number;
    };
    h4: {
      fontSize: string;
      fontWeight: string | number;
      lineHeight: string | number;
    };
    body: {
      fontSize: string;
      fontWeight: string | number;
      lineHeight: string | number;
      lineHeightAlt: string | number;
    };
    button: {
      fontSize: string;
      fontWeight: string | number;
      lineHeight: string | number;
    };
  };
}

export type {Theme};
