import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html, body {
      background: #F6F6F6;
      font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;

      overflow-x: hidden;
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    a {
      text-decoration: none;
      &:visited {
        color: inherit;
      }
    }
  `;
