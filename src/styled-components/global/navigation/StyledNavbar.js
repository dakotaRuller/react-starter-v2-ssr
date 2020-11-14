import styled, { keyframes } from 'styled-components';
import {
  colors,
  deviceQueries,
  transitions,
} from '@/src/styled-components/variables';

const navOpenAnimation = keyframes`
  0% {
  
  }
  100% {
    visibility: visible;
    left: 0;
    opacity: 1;
  }
`;

const StyledNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 1;

  div.nav-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 15px;
    div {
      height: 4px;
      width: 100%;
      background-color: ${colors.lightBlue};
      border-radius: 25px;
      transition: all 0.55s;
    }
    &.active div.top {
      opacity: 0;
    }
    &.active div.middle {
      position: absolute;
      transform: rotate(225deg);
    }
    &.active div.bottom {
      position: absolute;
      transform: rotate(135deg);
    }
    @media ${deviceQueries.desktop} {
      display: none;
    }
  }

  div.navigation-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35px;
    left: -55%;
    opacity: 0;
    padding: 10px;
    min-width: 50vw;
    height: calc(100vh - 60px);
    border-bottom-right-radius: 50px;
    background-color: ${(props) => props.theme.secondaryColor};

    @media ${deviceQueries.desktop} {
      display: flex;
      flex-direction: row;
      height: auto;
      width: auto;
      position: static;
      background-color: transparent;
      opacity: 1;
    }
  }

  div.navigation-links.active {
    opacity: 1;
    left: 0;
    z-index: 100 !important;
    transition: ${transitions.baseTransitionTime}
      cubic-bezier(0.17, 0.79, 0.77, 0.92);
  }

  a {
    padding: 0 10px;
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default StyledNavbar;
