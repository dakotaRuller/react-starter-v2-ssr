//Node Modules
import styled from 'styled-components';
import { colors, transitions } from '../variables';

export const BasicButton = styled.button`
  background-color: ${(props) =>
    props.blue ? colors.lightBlue : colors.lightPink};
  font-size: 1em;
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: ${(props) => (props.blue ? 'white' : 'black')};
  transition: all ${transitions.baseTransitionTime};
  &:hover {
    transform: scale(1.03);
    transition: transform ${transitions.baseTransitionTime};
  }
`;
