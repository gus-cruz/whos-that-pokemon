import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {font-family: "Early GameBoy"; src: url("//db.onlinewebfonts.com/t/3ada9815c06d2619d52d16a5601c96b2.eot"); src: url("//db.onlinewebfonts.com/t/3ada9815c06d2619d52d16a5601c96b2.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/3ada9815c06d2619d52d16a5601c96b2.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/3ada9815c06d2619d52d16a5601c96b2.woff") format("woff"), url("//db.onlinewebfonts.com/t/3ada9815c06d2619d52d16a5601c96b2.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/3ada9815c06d2619d52d16a5601c96b2.svg#Early GameBoy") format("svg"); }

  * {
    font-family: Early GameBoy;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::selection {
    background: ${props => props.theme.colors.text.bold};
    color: ${props => props.theme.colors.text.regular};
    text-shadow: none;
  }
  ::-moz-selection {
    background: ${props => props.theme.colors.text.bold};
    color: ${props => props.theme.colors.text.regular};
    text-shadow: none;
  }
`;