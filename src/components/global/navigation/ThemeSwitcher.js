//Node Modules
import React, { useContext } from 'react';

//Contexts
import themeContext, { ThemeContextConsumer } from '@/contexts/themeContext';

//Styled Components
import StyledThemeSwitcher from '@/styled-components/global/navigation/StyledThemeSwitcher';

const ThemeSwitcher = () => {
  const theme = useContext(themeContext);
  return (
    <StyledThemeSwitcher onClick={theme.toggleTheme}>
      <button className={theme.isDarkTheme ? '' : 'active'}>
        <img src="/light.svg" alt="sun icon" />
      </button>
      <button className={theme.isDarkTheme ? 'active' : ''}>
        <img src="/dark.svg" alt="moon icon" />
      </button>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
