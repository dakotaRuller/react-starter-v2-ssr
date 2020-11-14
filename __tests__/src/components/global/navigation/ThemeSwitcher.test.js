//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import ThemeSwitcher from '@/components/global/navigation/ThemeSwitcher';

//Styled Components
import StyledThemeSwitcher from '@/styled-components/global/navigation/StyledThemeSwitcher';

//Contexts
import { ThemeContextProvider } from '@/contexts/themeContext';

//Mocks
import theme from '@/mocks/theme/theme';

describe('<ThemeSwitcher/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ThemeContextProvider value={theme}>
        <ThemeSwitcher />
      </ThemeContextProvider>
    );
  });

  test('should have StyledThemeSwitcher', () => {
    expect(wrapper.dive().find(StyledThemeSwitcher)).toHaveLength(1);
  });

  test('should have theme context', () => {
    //TODO test the context changing onClick when there is more support for it
  });
});
