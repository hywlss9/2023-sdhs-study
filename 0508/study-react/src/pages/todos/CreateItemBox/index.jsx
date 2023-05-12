import Button from '../../../components/Button';

import * as S from './styled';

function CreateItemBox({ value, onChange, createTodo }) {
  const handleInputValue = e => {
    onChange(e.target.value);
  };

  const handlePressEnter = e => {
    if (!e.target.value.trim()) {
      alert('빈 값은 저장할 수 없습니다.');
      return;
    }
    if (e.keyCode === 13) createTodo();
  };

  return (
    <S.InputBox>
      <S.Input
        value={value}
        placeholder='To do를 입력해주세요.'
        onChange={handleInputValue}
        onKeyUp={handlePressEnter}
      />
      <Button onClick={createTodo} disabled={!value.trim()}>
        등록
      </Button>
    </S.InputBox>
  );
}

export default CreateItemBox;
