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
  }
`;

export const Input = styled.input`
  flex-shrink: 0;
  width: 100%;
  padding: 4px;
`;
