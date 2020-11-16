//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Pages
import Home from '../../pages/index';

//Components
import App from '@/src/App';
import Landing from '@/components/landing/Landing';

describe('<Home/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test('should have App component', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });

  test('should have Landing component', () => {
    expect(wrapper.find(App).find(Landing)).toHaveLength(1);
  });
});
