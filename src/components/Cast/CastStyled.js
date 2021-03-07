import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 40px 0;

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    margin: -10px;
  }
  .listItem {
    width: 120px;
    padding: 5px;
    margin: 10px;
    box-shadow: 1px 2px 5px grey;
  }

  .about {
    padding: 10px 0;
  }
`;
