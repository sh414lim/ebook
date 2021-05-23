import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


const globalstyle=createGlobalStyle`
    ${reset}

   body{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;


   }

    *{
        box-sizing:border-border-box;
    }

    a{
        text-decoration:none;
        color:inherit;
    }

`;

export default globalstyle;
        