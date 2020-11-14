//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import AppLoadingAnimation from '@/components/animations/AppLoadingAnimation';

//Styled Components
import StyledAppLoadingAnimation from '@/styled-components/global/animations/StyledAppLoadingAnimation.js';

describe('<AppLoadingAnimation/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AppLoadingAnimation />);
  });

  test('should have StyledAppLoadingAnimation component', () => {
    expect(wrapper.find(StyledAppLoadingAnimation)).toHaveLength(1);
  });

  test('should have dot animation structure', () => {
    let dots = [1, 2, 3, 4, 5];
    dots.forEach((i) => {
      expect(wrapper.find(`.dot-${i}`)).toHaveLength(1);
    });
  });
});
