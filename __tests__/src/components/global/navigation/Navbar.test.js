//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import Navbar from '@/components/global/navigation/Navbar';
import ThemeSwitcher from '@/components/global/navigation/ThemeSwitcher';

//Styled Components
import StyledNavbar from '@/styled-components/global/navigation/StyledNavbar';

describe('<Navbar/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  test('should have StyledNavbar component', () => {
    expect(wrapper.find(StyledNavbar)).toHaveLength(1);
  });

  test('should have div.nav-toggle element', () => {
    expect(wrapper.find('.nav-toggle')).toHaveLength(1);
    expect(wrapper.find('.nav-toggle').children()).toHaveLength(3);
    expect(wrapper.find('.nav-toggle').find('.top')).toHaveLength(1);
    expect(wrapper.find('.nav-toggle').find('.middle')).toHaveLength(1);
    expect(wrapper.find('.nav-toggle').find('.bottom')).toHaveLength(1);
  });

  test('should have div.navigation-links component', () => {
    const navLinksChildren = wrapper.find('.navigation-links').children();
    expect(wrapper.find('.navigation-links')).toHaveLength(1);
    expect(navLinksChildren).toHaveLength(3);
    expect(navLinksChildren.at(0).find('a').text()).toBe('Home');
    expect(navLinksChildren.at(1).find('a').text()).toBe('Technologies');
    expect(navLinksChildren.at(2).find('a').text()).toBe('Testing');
  });

  test('should have ThemeSwitcher component', () => {
    expect(wrapper.find(ThemeSwitcher)).toHaveLength(1);
  });
});
