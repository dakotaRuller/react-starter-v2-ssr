//Node Modules
import React from 'react';
import { shallow } from 'enzyme';
import Link from 'next/link';

//Mocks
import { technologiesContent } from '@/mocks/technologies/technologies';

//Components
import Technologies from '@/components/technologies/Technologies';

describe('<Technologies/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Technologies />);
  });

  test('should have a header', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('should have a list with technologies', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(6);
    technologiesContent.forEach(({ name, link, description }, index) => {
      const technologyItem = wrapper.find('li').at(index);
      expect(technologyItem.find('a')).toHaveLength(1);
      expect(technologyItem.find('a').props().href).toBe(link);
      expect(technologyItem.find('a').text()).toBe(name);
      expect(technologyItem.find('p').text()).toBe(description);
    });
  });
});
