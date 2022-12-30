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
  content: ['./{public,src}/**/*.{html,ts,tsx,svg}'],
  darkMode: 'class',
  theme: {
    borderRadius: createSpacing(0, 64),
    colors: {
      white: '#ffffff',
      black: '#000000',
      red: {
        300: '#ff9797',
        500: '#ec5757',
      },
      orange: {
        400: '#ff8f00',
      },
      green: {
        400: '#33d69f',
      },
      violet: {
        500: '#9277ff',
        700: '#7c5dfa',
      },
      stale: {
        300: '#dfe3fa',
        500: '#7e88c3',
        900: '#252945',
      },
      gray: {
        900: '#141625',
      },
      zinc: {
        500: '#888eb0',
        900: '#1e2139',
      },
      neutral: {
        100: '#f8f8fb',
        900: '#0c0e16',
      },
    },
    fontFamily: {
      sans: ['"Spartan"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      h1: ['2rem', {lineHeight: '2.25rem', letterSpacing: '-0.0625rem', fontWeight: '700'}],
      h2: ['1.25rem', {lineHeight: '1.375rem', letterSpacing: '-0.039375rem', fontWeight: '700'}],
      h3: ['1rem', {lineHeight: '1.5rem', letterSpacing: '-0.05rem', fontWeight: '700'}],
      h4: ['0.75rem', {lineHeight: '0.9375rem', letterSpacing: '-0.015625rem', fontWeight: '700'}],
      default: ['0.75rem', {lineHeight: '0.9375rem', letterSpacing: '-0.015625rem', fontWeight: '500'}],
      alt: ['0.6875rem', {lineHeight: '1.125rem', letterSpacing: '-0.014375rem', fontWeight: '500'}],
    },
    screens: {
      mobile: '23.4375rem',
      tablet: '48rem',
      desktop: '90rem',
    },
    spacing: createSpacing(0, 1440),
    extend: {
      backgroundColor: {
        inherit: 'inherit',
      },
      content: {
        bullet: '"\\2022"',
        DEFAULT: "''",
      },
    },
  },
  plugins: [],
};
