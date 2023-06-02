import type { DispatchSetStateAction } from "../../types/util";
import type { Todo as TodoType } from "../../types/todo";
import Todo from "../Todo";

import * as S from "./styled";

interface TodoListProps {
  todos: TodoType[];
  searchValue: string;
  deleteTodo: (id: TodoType["id"]) => void;
  editedTodoId: TodoType["id"] | undefined;
  setSelectedTodoIds: DispatchSetStateAction<TodoType["id"][]>;
  toggleEditTodo: (id: TodoType["id"]) => void;
  setEditedName: (name: TodoType["name"]) => void;
  editTodo: () => void;
}

function TodoList({
  todos,
  searchValue,
  editedTodoId,
  deleteTodo,
  setSelectedTodoIds,
  toggleEditTodo,
  setEditedName,
  editTodo,
}: TodoListProps) {
  return (
    <S.TodoList>
      {todos
        .filter(({ name }) => name.includes(searchValue))
        .map(({ id, name }, index) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          };

          const handleSelected = (checked: boolean) => {
            if (checked) {
              setSelectedTodoIds((prevState) => [...prevState, id]);
            } else {
              setSelectedTodoIds((prevState) =>
                prevState.filter((prevId) => prevId !== id)
              );
            }
          };

          const handleEditTodo = () => {
            toggleEditTodo(id);
          };

          const isEdited = editedTodoId === id;

          return (
            <Todo
              key={id}
              name={name}
              index={index}
              isEdited={isEdited}
              deleteTodo={handleDeleteTodo}
              handleSelected={handleSelected}
              toggleEditTodo={handleEditTodo}
              setEditedName={setEditedName}
              editTodo={editTodo}
            />
          );
        })}
    </S.TodoList>
  );
}

export default TodoList;
