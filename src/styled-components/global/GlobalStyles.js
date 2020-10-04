//Node Modules
import { createGlobalStyle } from 'styled-components';
import { colors, transitions } from '../variables';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.secondaryColor};
    background: ${(props) => props.theme.primaryColor};
    transition: background-color ${transitions.baseTransitionTime}, color ${
  transitions.baseTransitionTime
};
    main {
      div.app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        
        p {
          margin: 5px;
        };
      }
    }
  }
`;

export default GlobalStyles;
