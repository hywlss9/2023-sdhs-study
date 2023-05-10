import { useState } from 'react';

import * as S from './styled';

import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    setTodoName('');
    setTodos(prevState => [...prevState, { id: prevState.length, name: todoName }]);
  };

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox value={todoName} createTodo={createTodo} onChange={setTodoName} />
      <ItemList todos={todos} />
    </S.Container>
  );
}

export default Todos;
