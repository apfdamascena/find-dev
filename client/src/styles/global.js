import {
    createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --BACKGROUND: #F4F4F4;
        --CARD: #FFFFFF;
        --BACKGROUND-MAIN: #1B284C;
        --TEXT: #F4F4F4;
        --BORDER: #FAC747;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
        text-decoration: none;
        list-style: none;
    }
    html {
        font-size: 62.5%;
    }
    html, body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: normal;
        color: var(--TEXT);
        background: var(--BACKGROUND);
    }
`