//Node Modules
import { useState } from 'react';
import Head from 'next/head';

//Components
import App from 'src/App';
import { BasicButton, BasicWrapper } from '@/styled-components/index';

const Home = () => {
  const [pinkButton, togglePinkButton] = useState(false);

  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <App>
        <p>Home Page</p>
        {pinkButton ? (
          <BasicButton onClick={() => togglePinkButton(false)}>
            Hello I'm a Button
          </BasicButton>
        ) : (
          <BasicButton blue onClick={() => togglePinkButton(true)}>
            Hello I'm a Button
          </BasicButton>
        )}
      </App>
    </>
  );
}

export default Home
