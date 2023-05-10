import * as S from './styled';

import Todo from '../../../components/Todo';

function ItemList({ todos, deleteTodo }) {
  return (
    <S.ItemList>
      {todos.map(({ id, name }) => {
        const handleDeleteTodo = () => {
          deleteTodo(id);
        };

        return (
          <Todo key={id} deleteTodo={handleDeleteTodo}>
            {name}
          </Todo>
        );
      })}
    </S.ItemList>
  );
}

export default ItemList;
