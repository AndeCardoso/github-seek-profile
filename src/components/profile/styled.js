import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  padding-left: 80px;
  padding-right: 80px;
  width: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  background: rgba(176,188,196, 0.4);

  @media(max-width: 800px) {
    width: 350px;
  }
`;

export const WrapperNoMobile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media(max-width: 800px) {
    flex-direction: column;
    width: 300px;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  width: 200px;
  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
  
  @media(max-width: 800px) {
    margin-left: 10px;
    width: 200px;
    h1 {
      font-size: 22px;
    }
    h3 {
      font-size: 15px;
    }
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  h3 {
    margin-right: 8px;
  }
  a {
    font-size: 18px;
    color: #B3B3B3;
    font-weight: bold;
    word-break: break-word;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
  border: solid 5px black;
  background-color: black;

`;
