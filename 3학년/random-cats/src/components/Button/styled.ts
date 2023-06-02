import styled from 'styled-components';
import type { ButtonProps } from '.';

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 8px 12px;
  border: none;
  border-radius: 50vh;
  color: ${({ color }) => color || '#333'};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ pointer }) => pointer && 'cusor: pointer;'}
  > a {
    text-decoration: none;
    color: inherit;
  }
`;
