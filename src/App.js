//Node Modules
import React, { useReducer } from 'react';
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

//Global Reducers
const themeActions = {
  setTheme: 'SET_THEME',
  toggleTheme: 'TOGGLE_THEME',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case themeActions.setTheme:
      return action.value;
    case themeActions.toggleTheme:
      const updatedThemeState = {
        theme: state.isDarkTheme ? 'light' : 'dark',
        isDarkTheme: !state.isDarkTheme,
        primaryColor: state.isDarkTheme ? colors.white : colors.black,
        secondaryColor: state.isDarkTheme ? colors.black : colors.white,
      };
      window.localStorage.setItem('theme', JSON.stringify(updatedThemeState));
      return updatedThemeState;
    default:
      return state;
  }
};

const initialThemeState = {
  theme: 'light',
  isDarkTheme: false,
  primaryColor: colors.white,
  secondaryColor: colors.black,
};

const App = ({ children }) => {
  const clientIsLoadedContext = React.useContext(clientLoadedContext);
  const [clientIsLoaded, updateClientIsLoaded] = React.useState(false);
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState
  );

  const toggleTheme = async () => {
    await themeDispatch({ type: themeActions.toggleTheme });
  };

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme) {
      themeDispatch({
        type: themeActions.setTheme,
        value: JSON.parse(storedTheme),
      });
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
        ...themeState,
        toggleTheme: () => toggleTheme(),
      }}
    >
      <ThemeProvider theme={themeState}>
        <div className={'app'}>
          <GlobalStyles />
          <Navbar />
          <div className={'content-wrapper'}>
            {clientIsLoadedContext.clientIsLoaded ? (
              children
            ) : (
              <AppLoadingAnimation />
            )}
          </div>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
