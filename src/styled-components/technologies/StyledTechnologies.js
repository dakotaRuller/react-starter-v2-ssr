import styled from 'styled-components';

import { colors, deviceQueries } from '@/src/styled-components/variables';

const StyledTechnologies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  ul.technologies-list {
    max-width: 80%;
    margin: 10px auto;
    padding: 0;
    list-style-type: none;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 10px;

      div.content-separator {
            margin: 5px;
    height: 4px;
    width: 10px;
    border-radius: 5px;
    background-color: ${colors.lightGray};
      }

      p {
        margin-top: 0;
        @media ${deviceQueries.desktop} {
          margin-left: 0;
        }
      }
      
      @media ${deviceQueries.desktop} {
          flex-direction: row;
        }
      }
    }
  }
`;

export default StyledTechnologies;
