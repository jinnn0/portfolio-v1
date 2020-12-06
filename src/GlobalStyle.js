import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
     font-family: 'IBM Plex Sans', sans-serif;
    }

    * {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
    }

    .App {
     min-width: 320px;
     max-height: 100vh;
     padding: 0 20px;
     margin: 0 auto;
     overflow-x: hidden;
     overflow-y: scroll;
     scrollbar-width: none;
     -webkit-overflow-scrolling: touch;

     &::-webkit-scrollbar {
         display: none;
     }

     @media (min-height: 700px), (min-width: 950px) {
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
     }
    }

    a {
     text-decoration: none;
     transition: all 0.15s ease;
     color: rgb(0, 0, 0);
     padding-bottom: 5px;
     letter-spacing: 0.5px;
    }
`;

export default GlobalStyle;
