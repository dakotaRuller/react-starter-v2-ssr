//Node Modules
import React from 'react';

//Styled Components
import StyledAppLoadingAnimation from '@/styled-components/global/animations/StyledAppLoadingAnimation.js';

//Add styles and coding for loading animation to run before the client is loaded

const AppLoadingAnimation = () => {
  //
  return (
    <StyledAppLoadingAnimation>
      <div className={'dot dot-1'} />
      <div className={'dot dot-2'} />
      <div className={'dot dot-3'} />
      <div className={'dot dot-4'} />
      <div className={'dot dot-5'} />
    </StyledAppLoadingAnimation>
  );
};

export default AppLoadingAnimation;
