//Node Modules
import React from 'react';
import Link from 'next/link';

//Styled Components
import StyledLanding from '@/styled-components/landing/StyledLanding';

//Scripts
import { appLinks } from '@/src/scripts/constants';

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
      <p>
        Building out an entire application from scratch can be quite a daunting
        task when you're first starting out and next.js helps mitigate all of
        those architectural decisions being made at that point. This application
        goes a step further and layers on a basic UI along with some other
        functionality pieces on top of next.{' '}
      </p>
      <p>
        Follow the links to the different pages and you'll learn all about
        what's going on behind the scenes. Up next is{' '}
        <Link href={appLinks.technologies}>
          <a className={'styled-link'}>Technologies</a>
        </Link>
        .
      </p>
    </StyledLanding>
  );
};

export default Landing;
