import type { ChangeEvent } from "react";

import type { Todo as TodoType } from "../../types";

import Button from "../Button";
import Input from "../Input";

import * as S from "./styled";

interface TodoProps {
  name: TodoType["name"];
  index: number;
  isEdited: boolean;
  deleteTodo: () => void;
  handleSelected: (checked: boolean) => void;
  toggleEditTodo: () => void;
  setEditedName: (name: TodoType["name"]) => void;
  editTodo: () => void;
}

function Todo({
  name,
  index,
  isEdited,
  deleteTodo,
  handleSelected,
  toggleEditTodo,
  setEditedName,
  editTodo,
}: TodoProps) {
  const handleEditedName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEditedName(value);
  };

  return (
    <S.Todo>
      <span>{index + 1}</span>
      {isEdited ? (
        <Input defaultValue={name} onChange={handleEditedName} />
      ) : (
        <span>{name}</span>
      )}
      <div>
        <Button onClick={deleteTodo}>삭제</Button>
        <Button onClick={toggleEditTodo}>{isEdited ? "취소" : "수정"}</Button>
        {isEdited && <Button onClick={editTodo}>저장</Button>}
      </div>
    </S.Todo>
  );
}

export default Todo;
