import {Theme} from '~theming/types/theme';

const DEFAULT_THEME: Theme = {
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
  palette: {
    background: {
      primary: '#121721',
      secondary: '#19202d',
    },
    typography: {
      default: '#6e8098',
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
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.625rem',
    },
  },
};

export {DEFAULT_THEME};
