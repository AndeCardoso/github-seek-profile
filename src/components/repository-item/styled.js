import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 8px;
  background-color: #383838;
  border-radius: 8px;
  border: none;
  margin: 16px 16px;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  align-content: center;
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
  align-self: center;
`;

export const WrapperFullName = styled.h2`
  font-size: 15px;
  margin: 8px 0;
  color: #f2f2f2;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  margin-left: 25px;
  color: #B3B3B3;
  word-break: break-word;
`;

export const WrapperIn = styled.div`
  display: flex;
  padding: 10px;
`;

export const WrapperDescription = styled.div`
  overflow: hidden;
`; 