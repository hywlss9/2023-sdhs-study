import styled from 'styled-components';

import { Button } from '../../components/Button/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const MainWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  box-shadow: 0 0 4.5px rgba(156, 156, 156, 0.4);
  > div {
    font-size: 24px;
    font-weight: 700;
  }
  > ${Button} {
    padding: 8px 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #d6d6d6;
    }
    > a {
      color: #000000;
      text-decoration: none;
    }
  }
`;
