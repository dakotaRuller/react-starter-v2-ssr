import { createContext } from 'react';
import { colors } from '@/styled-components/variables';

const themeContext = createContext({
  theme: 'light',
  isDarkTheme: false,
  primaryColor: colors.white,
  secondaryColor: colors.black,
  toggleTheme: () => {},
});

export const ThemeContextProvider = themeContext.Provider;
export const ThemeContextConsumer = themeContext.Consumer;

export default themeContext;
