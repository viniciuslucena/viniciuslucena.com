import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Biotif";
    src: url("/fonts/Biotif-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  :root {
    --background: #08070B;
    --white: #FFFFFF;
    
    --color-text-secondary: #8f9ba8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    color: var(--white);
    font-family: 'Biotif';
  }
`;
