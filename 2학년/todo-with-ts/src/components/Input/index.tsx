import type { InputHTMLAttributes } from "react";

import * as S from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return <S.Input {...props} />;
}

export default Input;
