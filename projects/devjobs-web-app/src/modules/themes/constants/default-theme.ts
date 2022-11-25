import {Theme} from 'themes/types/theme';

const DEFAULT_THEME: Theme = {
  breakpoints: {
    mobile: '23.4375rem',
    tablet: '48rem',
    desktop: '90rem',
  },
  palette: {
    background: {
      primary: '#121721',
      secondary: '#19202d',
    },
    typography: {
      default: '#6e8098',
      defaultAlt: '#9daec2',
      title: '#ffffff',
    },
    success: {
      primary: '#5964e0',
      secondary: '#939bf4',
      contrast: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Kumbh Sans", sans-serif',
    h1: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: '2.1875rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '1.8125rem',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.5rem',
    },
    h4: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.125rem',
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.625rem',
      lineHeightAlt: '1.25rem',
    },
  },
  components: {
    button: {
      palette: {
        background: '#ffffff',
      },
      typography: {
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: '1.625rem',
      },
      other: {
        backgroundOpacity: {
          default: 0.1,
          hover: 0.25,
        },
      },
    },
  },
};

export {DEFAULT_THEME};
