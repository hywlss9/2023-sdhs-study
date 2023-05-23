import { useState } from "react";
import type { ChangeEvent } from "react";

import { v4 as uuidv4 } from "uuid";

import Input from "./components/Input";
import TodoList from "./components/TodoList";

import type { Todo } from "./types";

import "./App.css";

function App() {
  const [todoName, setTodoName] = useState<Todo["name"]>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTodoIds, setSelectedTodoIds] = useState<Todo["id"][]>([]);

  const handleTodoName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setTodoName(value);
  };

  const handleSearchValue = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const handleDeleteTodo = (id: Todo["id"]) => {
    setTodos((prevState) => {
      const filterTodos = [...prevState].filter((todo) => todo.id !== id);
      return filterTodos;
    });
  };

  const addTodo = () => {
    setTodos((prevState) => [...prevState, { id: uuidv4(), name: todoName }]);
  };

  return (
    <div className="App">
      <Input onChange={handleTodoName} />
      <button onClick={addTodo}>Todo 추가</button>
      <Input onChange={handleSearchValue} />
      <TodoList
        todos={todos}
        searchValue={searchValue}
        deleteTodo={handleDeleteTodo}
        setSelectedTodoIds={setSelectedTodoIds}
      />
    </div>
  );
}

export default App;
