//Node Modules
import React from 'react';

//Styled Components
import StyledLanding from '@/styled-components/landing/StyledLanding';

const Landing = () => {
  return (
    <StyledLanding>
      <h2>Overview</h2>
      {/*Well I guess figure ot how to set the styling for the "a" tag*/}
      <p>
        This application is a server side rendered web app using{' '}
        <a target="_blank" href="https://nextjs.org/" className="styled-link">
          next.js
        </a>{' '}
        and{' '}
        <a target="_blank" href="https://reactjs.org/" className="styled-link">
          react.js
        </a>
        . Next.js takes the role of making the application server side rendered
        and react.js takes care of the front end. This application was created
        using{' '}
        <a
          target="_blank"
          href="https://nextjs.org/docs/api-reference/create-next-app"
          className="styled-link"
        >
          create-next-app
        </a>{' '}
        and build out to be easy to edit yourself and navigate.
      </p>
    </StyledLanding>
  );
};

export default Landing;
