import { Todo as TodoType } from "../../types";

interface TodoProps {
  name: TodoType["name"];
  deleteTodo: () => void;
  handleSelected: (checked: boolean) => void;
}

function Todo({ name, deleteTodo, handleSelected }: TodoProps) {
  return <li>{name}</li>;
}

export default Todo;
