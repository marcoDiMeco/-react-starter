import { createGlobalStyle } from 'styled-components';
import 'typeface-muli';

const GlobalStyles = createGlobalStyle`

    html, body {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Muli', sans-serif;
        background-color: white;
    }   

    a {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
`;

export default GlobalStyles;
