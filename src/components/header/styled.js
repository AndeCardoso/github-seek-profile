  
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
`;

export const SiteName = styled.div`
    font-size: 40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    margin-bottom: 25px;
    margin-top: 25px;

  @media(max-width: 800px) {
    width: 90vw;
    font-size: 30px;
    text-align: center;
  }

`;

export const Searching = styled.div`
  display: flex;
`;