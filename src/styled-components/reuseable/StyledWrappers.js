import styled from 'styled-components';
import { colors } from '../variables';

export const BasicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${colors.lightPink};
  }
`;
