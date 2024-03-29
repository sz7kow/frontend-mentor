module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: false,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'crlf',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  printWidth: 120,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
