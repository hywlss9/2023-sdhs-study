import styled from 'styled-components';

export const SearchInputBox = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
`;

export const SearchInput = styled.input`
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
