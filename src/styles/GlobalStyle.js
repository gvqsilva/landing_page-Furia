// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', 'Arial', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    background-color: #242424;
    color: rgba(255, 255, 255, 0.87);
    line-height: 1.5;
    font-weight: 400;
    min-height: 100vh;
    padding-top: 80px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #646cff;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: #535bf2;
  }

  button {
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    transition: border-color 0.25s;
    word-break: break-word;

    &:hover {
      border-color: #646cff;
    }
  }

  h1, h2, h3 {
    font-weight: bold;
    color: #fff;
  }

  /* Light theme */
  @media (prefers-color-scheme: light) {
    body {
      background-color: #fff;
      color: #213547;
    }

    a:hover {
      color: #747bff;
    }

    button {
      background-color: #f9f9f9;
    }
  }
`;

export default GlobalStyle;
