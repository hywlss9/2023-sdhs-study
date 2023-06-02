import * as S from './styled';

import Todo from '../../../components/Todo';

function ItemList({ todos, searchValue, deleteTodo, setSelectedTodoIds }) {
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

          const handleSelected = checked => {
            if (checked) {
              // checkbox가 check 되었을 때 (todo를 선택 했을 때)
              // 기존에 선택 되어 있던 seletedTodoIds에 새로 선택한 todo의 id를 넣어준다.
              // -> 새로운 todo를 선택했다
              setSelectedTodoIds(prevState => [...prevState, id]);
            } else {
              // checkbox가 check 풀렸을 때 (todo를 선택 해제 했을 때)
              // 기존에 선택 되어 있던 seletedTodoIds에서
              // 이미 선택 되어 있는 체크 해제 한 todo의 id를 seletedTodoIds 배열에서 지워준다.
              // -> 선택 된 todo 삭제(체크 해제)
              setSelectedTodoIds(prevState => prevState.filter(prevId => prevId !== id));
            }
            console.log({ id, checked });
          };

          return (
            <Todo key={id} deleteTodo={handleDeleteTodo} handleSelected={handleSelected}>
              {name}
            </Todo>
          );
        })}
    </S.ItemList>
  );
}

export default ItemList;
