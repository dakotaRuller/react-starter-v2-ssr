import styled, { keyframes } from 'styled-components';
import { colors, transitions } from '../../variables';

const dotAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  25% {
    transform: translateY(8px);
    opacity: 0.7;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  75% {
    transform: translateY(-8px);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledAppLoadingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  div.dot {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${colors.lightPink};
    margin: 5px;
    transition: all ${transitions.loadingAnimationTransitionTime};
  }

  div.dot-1 {
    animation: ${dotAnimation} ${transitions.loadingAnimationTransitionTime}
      linear infinite;
  }
  div.dot-2 {
    animation: ${dotAnimation} ${transitions.loadingAnimationTransitionTime}
      linear 0.2s infinite;
  }
  div.dot-3 {
    animation: ${dotAnimation} ${transitions.loadingAnimationTransitionTime}
      linear 0.4s infinite;
  }
  div.dot-4 {
    animation: ${dotAnimation} ${transitions.loadingAnimationTransitionTime}
      linear 0.6s infinite;
  }
  div.dot-5 {
    animation: ${dotAnimation} ${transitions.loadingAnimationTransitionTime}
      linear 0.8s infinite;
  }
`;

export default StyledAppLoadingAnimation;
