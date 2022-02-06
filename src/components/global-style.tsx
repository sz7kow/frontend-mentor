import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  html {
    font-size: 62.5%;

    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  body {
    background-color: #f7f8fd;
    text-rendering: optimizeSpeed;
    font-family: "Jost", sans-serif;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyle;
