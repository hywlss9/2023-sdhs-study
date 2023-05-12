import * as S from './styled';

import Todo from '../../../components/Todo';

function ItemList({ todos, searchValue, deleteTodo }) {
  // 7. (6)에서 searchValue를 전달받았다.(검색창에 입력한 값)

  return (
    <S.ItemList>
      {todos
        //todo.name = 1, 2, 3, 4, 5
        // searchValue: 1

        // 8. filter 함수를 사용해준다
        //    includes로 todo의 name에 검색한 값이(searchValue) 있는지 확인한다.
        .filter(todo => {
          console.log('name: ', todo.name, ' searchValue: ', searchValue);
          return todo.name.includes(searchValue);
        })
        // [1]
        .map(({ id, name }) => {
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
