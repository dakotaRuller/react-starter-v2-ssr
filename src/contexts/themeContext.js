import { createContext } from 'react';
import { colors } from '@/styled-components/variables';

const themeContext = createContext({
  theme: 'light',
  isDarkTheme: false,
  primaryColor: colors.white,
  secondaryColor: colors.black,

  //figure out the best way to toggle the theme properties without using an big if-else statement
  toggleTheme: function () {
    this.theme = 'dark';
    (this.isDarkTheme = !this.isDarkTheme),
      (this.primaryColor = colors.black),
      (this.secondaryColor = colors.white);
  },
});

export const ThemeContextProvider = themeContext.Provider;
export const ThemeContextConsumer = themeContext.Consumer;

export default themeContext;
