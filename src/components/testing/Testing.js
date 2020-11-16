//Node Modules
import React from 'react';

//Styled Components
import StyledTesting from '@/styled-components/testing/StyledTesting';

const Testing = () => {
  return (
    <StyledTesting>
      <h2>Testing</h2>
      <p>
        This application uses jest and enzyme to unit tests all of its
        components and functions.
      </p>
      <p>
        <a
          className={'styled-link'}
          href="https://jestjs.io/docs/en/getting-started"
          target="_blank"
        >
          Jest
        </a>{' '}
        is a testing framework build to test javascript applications and its the
        basis for all of the unit tests in this application.
      </p>
      <p>
        <a
          className={'styled-link'}
          href="https://enzymejs.github.io/enzyme/"
          target="_blank"
        >
          Enzyme
        </a>{' '}
        is a testing utility build by airbnb that makes it easier to test your
        components, It works quite a few testing frameworks but integrates best
        with jest.
      </p>
      <p>
        Now lets get into how it all works and how to run the tests. All the
        setup is done in two files the <code>jest.config.js</code> and the{' '}
        <code>setupTests.js</code> both are located at the root directory. I
        wont go into detail on how they both work, you can refer to the{' '}
        <a
          className={'styled-link'}
          href="https://jestjs.io/docs/en/configuration"
          target="_blank"
        >
          docs
        </a>{' '}
        for that, but if you want to configure jest in your own way it will be
        done in one or both of those files.
      </p>
      <p>
        Running the tests is pretty easy you just need to open a console window
        and navigate to the root directory of the app. Once you've done that you
        simply need to run the command: <code>npm run test</code>, you can also
        run the command: <code>npm run test:coverage</code>. Both will give you
        feedback about whats going on in the console and both commands are
        defined in the <code>package.json</code>.
      </p>
      <p>
        The last thing to know about the tests is where they're located in the
        file structure and how they're setup. There are two main directories
        associated with the tests, the <code>__tests__</code> and the{' '}
        <code>__mocks__</code>. The <code>__tests__</code> directory holds all
        of the tests and has a structure to mimic the way everything looks form
        the root of the application. The <code>__mocks__</code> directory holds
        any and all type of data you need to mock I.E. data that should be
        returned from an api call or context/store data from redux. The reason
        for the mocks is because the test run as a script on the console so it
        they wont have access to the DOM or the ability to call out to an api.
      </p>
      <p>
        That's it for testing, Enjoy using this application as a basis for all
        react SSR you may build. Happy coding:)
      </p>
    </StyledTesting>
  );
};

export default Testing;
