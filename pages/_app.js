//Node Modules
import React, { useContext, useState } from 'react';

//Contexts
// import { ClientLoadedContextProvider } from '@/contexts/clientLoadedContext';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export const reportWebVitals = (metric) => {
  console.log('metrics: ', metric);
};

export default MyApp;
