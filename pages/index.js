//Node Modules
import { useState } from 'react';
import Head from 'next/head';

//Components
import App from 'src/App';
import Landing from '@/components/landing/Landing';

const Home = () => {
  const [pinkButton, togglePinkButton] = useState(false);

  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <App>
        <Landing />
      </App>
    </>
  );
};

export default Home;
