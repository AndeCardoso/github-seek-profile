import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
    *,
    ::before,
    ::after {
        outline: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        background-color: #1a1a1a;
    }

    a {
        text-decoration: none;
    }
`