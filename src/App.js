//Node Modules
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

//Context
import { ThemeContextProvider } from '@/contexts/themeContext';
import clientLoadedContext from '@/contexts/clientLoadedContext';

//Styled Components
import GlobalStyles from '@/styled-components/global/GlobalStyles';
import { BasicButton } from '@/styled-components/index';
import { colors } from '@/styled-components/variables';

//Components
import Navbar from '@/components/global/navigation/Navbar';
import AppLoadingAnimation from '@/components/animations/AppLoadingAnimation';

const App = ({ children }) => {
  const clientIsLoadedContext = useContext(clientLoadedContext);
  const [clientIsLoaded, updateClientIsLoaded] = useState(false);

  const { reload } = useRouter();

  const [theme, updateTheme] = useState({
    theme: 'light',
    isDarkTheme: false,
    primaryColor: colors.white,
    secondaryColor: colors.black,
  });

  const toggleTheme = () => {
    const updatedTheme = {
      theme: theme.isDarkTheme ? 'light' : 'dark',
      isDarkTheme: !theme.isDarkTheme,
      primaryColor: theme.isDarkTheme ? colors.white : colors.black,
      secondaryColor: theme.isDarkTheme ? colors.black : colors.white,
    };
    window.localStorage.setItem('theme', JSON.stringify(updatedTheme));
    updateTheme(updatedTheme);
    setTimeout(() => reload(), 50);
  };

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme) {
      updateTheme(JSON.parse(storedTheme));
    }
    setTimeout(() => {
      clientIsLoadedContext.toggleClientIsLoaded(true);
      //For some reason the client side routing only works with the client loading animation if
      //the line below runs so ill leave it for now
      updateClientIsLoaded(true);
    }, 500);
  }, []);

  return (
    <ThemeContextProvider
      value={{
        ...theme,
        toggleTheme: () => toggleTheme(),
      }}
    >
      <ThemeProvider theme={theme}>
        <div className={'app'}>
          {console.log(clientIsLoadedContext)}
          <GlobalStyles />
          <Navbar />
          {clientIsLoadedContext.clientIsLoaded ? (
            children
          ) : (
            <AppLoadingAnimation />
          )}
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
