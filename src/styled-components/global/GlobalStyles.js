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
        height: 100vh;
        width: 100vw;
        
        p {
          margin: 5px;
        };
        
        h2 {
          font-weight: 400;
        }
        
        a {
          text-decoration: none;
        }
        
        a.styled-link {
          display: inline-block;
          position: relative;
          color: inherit;
          text-decoration: none;
          
          &::after {
            content: '';
            background: ${colors.lightBlue};
            opacity: 0.65;
            position: absolute;
            left: calc(50% - 45%);
            bottom: 0;
            width: 90%;
            height: calc(100% - 15px);
            border-bottom-right-radius: 2px;
            border-bottom-left-radius: 2px;
            transition: 0.5s cubic-bezier(0.25, 0.1, 0, 2.05);
          }
          
          &:hover:after {
            width: 100%;
            height: 90%;
            left: 0;
            border-radius: 1px;
            opacity: 0.3;
            transition: 0.65s cubic-bezier(0.25, 0.1, 0, 2.05);
          }
        }
        
        div.content-wrapper {
          margin: 40px 1em;
        }
      }
    }
  }
`;

export default GlobalStyles;
