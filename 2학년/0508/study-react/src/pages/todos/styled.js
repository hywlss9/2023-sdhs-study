import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 60vw;
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
  > button {
    width: 100%;
    height: 30px;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const Title = styled.h2``;
