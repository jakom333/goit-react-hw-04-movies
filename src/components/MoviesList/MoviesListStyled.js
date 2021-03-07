import styled from 'styled-components';

export const MovieListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px;
  margin: -20px;
  list-style: none;

  .listItem {
    border-radius: 14px;
    margin: 10px;
    box-shadow: 1px 2px 7px black;
  }

  .listImg {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }

  .listTitle {
    text-align: center;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 700;
    color: black;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
  }

  .link {
    text-decoration: none;
  }
`;
