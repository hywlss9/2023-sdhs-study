import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { setTodos, createTodo, deleteTodo, deleteSelectedTodos } from '../../reduce/todos';

import * as S from './styled';

import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';
import SearchInput from '../../components/SearchInput';
import Button from '../../components/Button';

function Todos() {
  const [todoName, setTodoName] = useState('');

  const dispatch = useDispatch();

  const { todos } = useSelector(state => state.todos);

  // SearchInput에서 변경된 input의 값을 여기서는 알 수 없다.
  // 그래서 SearchInput의 onChange를 통해 바뀐 값을 여기다가 저장한다.
  // 그래서 만들었다.
  // 5. searchValue가 (4)에서 바꿔주었기 때문에 바뀐다.
  const [searchValue, setSearchValue] = useState(''); //1

  // 선택한 todos의 id들을 저장하는 state
  const [selectedTodoIds, setSelectedTodoIds] = useState([]);

  const handleCreateTodo = () => {
    setTodoName('');
    dispatch(createTodo({ id: uuidv4(), name: todoName }));
    //setTodos(prevState => [...prevState, { id: uuidv4(), name: todoName }]);
  };

  const handleTodoDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleSelectedTodoDelete = () => {
    dispatch(deleteSelectedTodos(selectedTodoIds));
  };

  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      dispatch(setTodos(parseTodos));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      localStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <SearchInput
        // 3. SearchInput의 handleValue에서 실행시켜준 함수
        onChange={value => {
          // 4. SearchInput의 onChange에서 넣어준 value
          setSearchValue(value);
        }}
      />
      <CreateItemBox value={todoName} createTodo={handleCreateTodo} onChange={setTodoName} />
      <Button onClick={handleSelectedTodoDelete}>선택 된 To do 삭제</Button>
      {/* 
        6. 4에서 searchValue를 바꿔 주었고, 그 값을 
        ItemList에 props로 전달해준다.
        그래서 ItemList에서 검색 input의 값을 사용할 수 있게 되었다.
       */}
      <ItemList
        todos={todos}
        searchValue={searchValue}
        deleteTodo={handleTodoDelete}
        setSelectedTodoIds={setSelectedTodoIds}
      />
    </S.Container>
  );
}

export default Todos;
