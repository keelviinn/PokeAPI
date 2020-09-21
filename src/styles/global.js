import { createGlobalStyle } from 'styled-components';

import Pokeball from '../assets/svg/Pokeball.svg';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }

   html, body, #root {
      min-height: 100%;
      margin: 0 auto;
      padding: 0;
   }

   body {
      background: #f4dc26 url(${Pokeball}) no-repeat 120%;
      -webkit-font-smoothing: antialiased !important;
   } 

   body, input, button, a {
      color: #222;
      font-size: 16px;
      font-family: 'Poppins', Arial, Helvetica, sans-serif;
   }

   button {
      cursor: pointer;
   }
`;
