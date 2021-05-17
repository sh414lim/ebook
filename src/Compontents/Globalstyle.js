import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


const globalstyle=createGlobalStyle`
    ${reset}


    *{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:#ecf0f1;
    }

    a{
        text-decoration:none;
        color:inherit;
    }

`;

export default globalstyle;
        