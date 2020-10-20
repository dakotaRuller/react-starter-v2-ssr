//Components
import App from 'src/App';
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

// PageTwo.getInitialProps = (ctx) => {
//   // console.log(ctx);
//
//   return {
//     someProp: "Test"
//   }
// };

export function getServerSideProps(context) {
  // console.log(context);
  return {
    props: {
      someProp: 'Test',
    },
  };
}

export default Technologies;
