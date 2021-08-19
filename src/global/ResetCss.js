import { createGlobalStyle } from 'styled-components';


export const ResetCss = createGlobalStyle`
    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1a1a1a;
        color: #ffffff;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    }

    a {
        text-decoration: none;
        color: white;
    }
`