//Node Modules
import Head from 'next/head';

//Components
import App from 'src/App';

const PageTwo = (props) => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <App>
        <p>Page Two Dude</p>
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

export default PageTwo;
