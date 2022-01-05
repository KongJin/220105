import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    html,body{
        width:100%;
        margin: 0 auto;
    }
    a{
        all: unset;
        cursor: pointer;
    }
    button{
        all: unset;
        cursor: pointer;
        border-radius: 10px;
    }
    select{
        cursor: pointer;
    }
`;

export default GlobalStyle;
