import styled from 'styled-components';

import { Button } from '../Button/styled';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  list-style: none;
  ${Button} {
    padding: 4px 8px;
    border: none;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  ${Button} {
    color: #fff;
    transition: 0.3s;
    &.delete {
      background-color: #fc3d39;
      &:hover {
        background-color: #e33437;
      }
    }
  }
`;
