//Node Modules
import React, { useContext, useState } from "react"

//Components
import App from 'src/App';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <App>
        <Component {...pageProps} />
      </App>
    </main>
  );
}

export const reportWebVitals = (metric) => {
  console.log('metrics: ', metric);
};

export default MyApp;
