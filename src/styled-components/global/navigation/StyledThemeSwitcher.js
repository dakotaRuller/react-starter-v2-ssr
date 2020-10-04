import styled from 'styled-components';
import { transitions } from '../../variables';

const StyledThemeSwitcher = styled.div`
  display: flex;
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 20px;
  margin-right: 5px;
  padding: 1px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: all 400ms;

    img {
      width: 80%;
      max-width: 30px;
    }
  }

  button.active {
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 20px;
    transition: all ${transitions.baseTransitionTime};
    flex-basis: 60%;
  }
`;

export default StyledThemeSwitcher;
