//Components
import App from '@/src/App';
import Head from 'next/head';
import TestingPage from '@/components/testing/Testing';

const Testing = (props) => {
  return (
    <>
      <Head>
        <title>Testing</title>
      </Head>
      <App>
        <TestingPage />
      </App>
    </>
  );
};

export default Testing;
