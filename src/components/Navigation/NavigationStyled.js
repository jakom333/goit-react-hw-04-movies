import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  .navLink {
    margin-right: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #3483eb;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    box-shadow: 1px 1px 3px black;
  }

  .activeNavLink {
    color: #f5ec42;
    box-shadow: 0 0 10px #f5ec42;
  }
`;
