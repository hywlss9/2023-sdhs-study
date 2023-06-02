import styled from 'styled-components';
import type { CSSProperties } from 'react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 320px;
  height: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  list-style: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.5);
  }
`;

export const Img = styled.img<{ objectFit?: CSSProperties['objectFit'] }>`
  width: 100%;
  height: 100%;
  ${({ objectFit }) => objectFit && `object-fit: ${objectFit};`}
`;
