import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import * as S from './styled';

function Main() {
  return (
    <S.Container>
      <S.MainWapper>
        <div>To do list</div>
        <Button>
          <Link to='/todos'>만들기</Link>
        </Button>
      </S.MainWapper>
    </S.Container>
  );
}

export default Main;
