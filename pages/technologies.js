//Components
import App from 'src/App';
import Head from 'next/head';

const Technologies = (props) => {
  return (
    <>
      <Head>
        <title>Technologies</title>
      </Head>
      <App>
        <p>Technologies Page</p>
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
