import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 10px;
    padding: 10px;
    border-radius: 7px;
    background-color: #3483eb;
  }

  .navLink {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }

  .activeNavLink {
    color: #ebbd34;
  }
`;
