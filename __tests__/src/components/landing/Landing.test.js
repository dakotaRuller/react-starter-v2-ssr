//Node Modules
import React from 'react';
import { shallow } from 'enzyme';
import Link from 'next/link';

//Components
import Landing from '@/components/landing/Landing';

//Scripts
import { appLinks } from '@/src/scripts/constants';

describe('<Landing/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });

  test('should have a header', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('should have content in the form of paragraphs', () => {
    expect(wrapper.find('p')).toHaveLength(3);
  });

  test('the first paragraph should have links', () => {
    expect(wrapper.find('p').at(0).find('a')).toHaveLength(3);
  });

  test('should have link to next page', () => {
    expect(wrapper.find('p').at(2).find('a')).toHaveLength(1);
    expect(wrapper.find('p').at(2).find('a').text()).toBe('Technologies');
    expect(wrapper.find('p').at(2).find(Link).props().href).toBe(
      appLinks.technologies
    );
  });
});
