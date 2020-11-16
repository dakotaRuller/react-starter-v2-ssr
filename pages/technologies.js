//Components
import App from '@/src/App';
import Head from 'next/head';
import TechnologiesPage from '@/components/technologies/Technologies';

const Technologies = (props) => {
  return (
    <>
      <Head>
        <title>Technologies</title>
      </Head>
      <App>
        <TechnologiesPage />
      </App>
    </>
  );
};

export default Technologies;
