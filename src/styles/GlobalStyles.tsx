import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    justify-content: center;
    padding: 30px;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    font-family: "roboto", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
    text-shadow: 2px 3px 3px #c8c9cB
  }

  ol, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  input{
    all:unset;
  }
`;

export default GlobalStyles;
