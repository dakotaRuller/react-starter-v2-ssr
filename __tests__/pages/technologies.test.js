//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Pages
import Technologies from '../../pages/technologies';

//Components
import App from '@/src/App';
import TechonogiesPage from '@/components/technologies/Technologies';

describe('<Technologies/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Technologies />);
  });

  test('should have App component', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });

  test('should have Landing component', () => {
    expect(wrapper.find(App).find(TechonogiesPage)).toHaveLength(1);
  });
});
