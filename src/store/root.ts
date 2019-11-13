import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Wallpoet&display=swap");
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap'); 

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  --base-font-family: "Wallpoet", cursive;
  --base-color: rgba(0, 213, 60, 1);
  --chat-font-family: 'Righteous', cursive;
  background-color: black;
}

@media (max-width: 1200px) {
  html,
  body {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  html,
  body {
    font-size: 10px;
  }
}

`;

export default GlobalStyle;