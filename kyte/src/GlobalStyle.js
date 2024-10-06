// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  /* Example media query for devices with a max width of 600px */
  @media (max-width: 600px) {
    body {
      background-color: #f4f4f4; // Just an example change
    }
  }
`;

export default GlobalStyle;
