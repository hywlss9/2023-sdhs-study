import styled from "styled-components";
import { Todo } from "../Todo/styled";

export const TodoList = styled.ul`
  padding: 0;
  > ${Todo}:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;
