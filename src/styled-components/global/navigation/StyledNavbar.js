import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  div.navigation-links {
    display: flex;
  }
  a {
    padding: 0 10px;
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default StyledNavbar;
