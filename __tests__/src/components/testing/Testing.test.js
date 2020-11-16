//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import Testing from '@/components/testing/Testing';

describe('<Testing/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Testing />);
  });

  test('should have header', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('should have content', () => {
    expect(wrapper.find('p')).toHaveLength(7);
  });

  test('should have links', () => {
    expect(wrapper.find('a')).toHaveLength(3);
  });
});
