import type { ButtonHTMLAttributes } from "react";

import * as S from "./styled";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <S.Button {...props}>{props.children}</S.Button>;
}

export default Button;
