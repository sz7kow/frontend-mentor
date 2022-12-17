// @ts-check
const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @typedef {import('tailwindcss').Config} TailwindConfig
 * @typedef {Object.<number, string>} Spacing
 */

/**
 * @param {number} minValue
 * @param {number} maxValue
 * @returns {Spacing}
 */
function createSpacing(minValue, maxValue) {
  /** @type {Spacing} */
  const spacing = {};
  for (let value = minValue; value <= maxValue; value++) {
    spacing[value / 4] = `${value / 16}rem`;
  }
  return spacing;
}

/** @type {TailwindConfig} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    borderRadius: createSpacing(0, 100),
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        100: '#f4f6f8',
        500: '#9daec2',
        700: '#6e8098',
      },
      indigo: {
        500: '#939bf4',
        700: '#5964e0',
      },
      neutral: {
        900: '#121721',
      },
      stale: {
        900: '#19202d',
      },
    },
    extend: {
      backgroundColor: {
        transparent: 'transparent',
      },
      content: {
        bullet: '"\\2022"',
        DEFAULT: "''",
      },
      maxWidth: createSpacing(0, 1440),
      minWidth: createSpacing(0, 1440),
      scale: {
        200: '200%',
      },
    },
    fontFamily: {
      sans: ['"Kumbh Sans"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      h1: ['1.75rem', {lineHeight: '2.1875rem', fontWeight: 700}],
      h2: ['1.5rem', {lineHeight: '1.8125rem', fontWeight: 700}],
      h3: ['1.25rem', {lineHeight: '1.5rem', fontWeight: 700}],
      h4: ['0.875rem', {lineHeight: '1.125rem', fontWeight: 700}],
      body: ['1rem', {lineHeight: '1.625rem', fontWeight: 400}],
      base: ['1rem', {lineHeight: '1.25rem', fontWeight: 400}],
      button: ['1rem', {lineHeight: '1.625rem', fontWeight: 700}],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    letterSpacing: {
      normal: '0rem',
      wide: '0.01875rem',
    },
    lineHeight: {
      1: '1.125rem',
      2: '1.25rem',
      3: '1.5rem',
      4: '1.625rem',
      5: '1.8125rem',
      6: '2.1875rem',
    },
    screens: {
      mobile: '23.4375rem',
      tablet: '48rem',
      desktop: '90rem',
    },
    spacing: createSpacing(0, 1440),
  },
  plugins: [],
};
