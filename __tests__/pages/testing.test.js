//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Pages
import Testing from '../../pages/testing';

//Components
import App from '@/src/App';
import TestingPage from '@/components/testing/Testing';

describe('<Testing/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Testing />);
  });

  test('should have App component', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });

  test('should have Landing component', () => {
    expect(wrapper.find(App).find(TestingPage)).toHaveLength(1);
  });
});
