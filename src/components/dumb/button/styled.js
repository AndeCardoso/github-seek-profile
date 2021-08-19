import styled from 'styled-components'

export const Button = styled.button`
    background-color: #595959;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all ease-in-out 0.5s;
    &:hover {
      background-color: #BDBDBD;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
`;