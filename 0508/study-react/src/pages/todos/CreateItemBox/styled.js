import styled from 'styled-components';

import { Button } from '../../../components/Button/styled';

export const InputBox = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  ${Button} {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const Input = styled.input`
  flex-shrink: 1;
  width: 100%;
  padding: 4px;
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
  &:focus {
    border-color: #b3b3b3;
    transition: 0.3s;
  }
`;
