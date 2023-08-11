import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

 const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    }

    :root {
        /* color */
        --main-color: #7B57DF;
        --dark-color: #1B2149;
        --light-color: #FFFFFF;
        --green-color: #5DC983;
        --yello-color: #F2AF4C;
        --red-color: #EB5769;

        /* font-size */
        --large-size: 24px;
        --medium-size: 20px;
        --regular-size: 16px;
        --small-size: 14px;

        /* font-weight */
        --bold-weight: 700;
        --medium-weight: 500;
        --regular-weight: 400;
    }

    html {
        font-family: 'Pretendard-Regular'; 
    }
`

export default GlobalStyle;