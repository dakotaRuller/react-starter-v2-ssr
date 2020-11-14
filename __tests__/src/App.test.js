//Node Modules
import React from 'react';
import { shallow } from 'enzyme';
import * as nextRouter from 'next/router';
import { ThemeProvider } from 'styled-components';

//Components
import App from '@/src/App';
import Navbar from '@/components/global/navigation/Navbar';
import AppLoadingAnimation from '@/components/animations/AppLoadingAnimation';

//Context
import { ThemeContextProvider } from '@/contexts/themeContext';

//Styled Components
import GlobalStyles from '@/styled-components/global/GlobalStyles';
import { BasicButton } from '@/styled-components/index';
import { colors } from '@/styled-components/variables';

//Mocks
import theme from '@/mocks/theme/theme';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<App/>', () => {
  let wrapper;
  let setState;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();
    wrapper = shallow(
      <App>
        <p>Content</p>
      </App>
    );
  });

  test('should have styled components theme provider', () => {
    expect(wrapper.dive().find(ThemeProvider)).toHaveLength(1);
    expect(wrapper.dive().find(ThemeProvider).props().theme).toEqual(theme);
  });

  test('should have div.app wrapper', () => {
    expect(wrapper.dive().find('.app')).toHaveLength(1);
  });

  test('should have styled components GlobalStyles', () => {
    expect(wrapper.dive().find(GlobalStyles)).toHaveLength(1);
  });

  test('should have Navbar component', () => {
    expect(wrapper.dive().find(Navbar)).toHaveLength(1);
  });

  test('should have AppLoadingAnimation component', () => {
    expect(wrapper.dive().find(AppLoadingAnimation)).toHaveLength(1);
  });
});
