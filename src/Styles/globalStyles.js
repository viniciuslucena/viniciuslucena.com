import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Biotif";
    src: url("/fonts/Biotif-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Neuzeit Grotesk";
    src: url("/fonts/NeuzeitGro-Bol.ttf");
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Rubik";
    src: url("/fonts/Rubik.ttf");
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }

  :root {
    --background: #08070B;
    --white: #FFFFFF;
    --grey: #212024;

    --color-text-primary: #8f9ba8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    color: var(--color-text-primary);
    font-family: 'Biotif';
  }
`;
