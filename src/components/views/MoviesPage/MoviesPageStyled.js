import styled from 'styled-components';

export const SearchForm = styled.div`
  padding: 40px 40px;

  form {
    text-align: center;
  }

  .input {
    width: 300px;
    height: 45px;
    padding: 0 10px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 28px;
    border-bottom: 1px solid black;
  }

  .btn {
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #3483eb;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    box-shadow: 1px 1px 3px black;
  }
`;
