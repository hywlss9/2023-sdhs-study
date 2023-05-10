import * as S from './styled';

function Button(props) {
  return (
    <>
      <S.Button {...props}>{props.children}</S.Button>
    </>
  );
}

export default Button;
