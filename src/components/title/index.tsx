import { ReactNode } from "react";
import Styled from "./index.style";

interface IProps {
  children: ReactNode | string;
  noIcon?: boolean;
}

const Title = ({ children, noIcon }: IProps) => {
  return (
    <Styled.Title>
      {!noIcon && <Styled.CustomSquare />}
      {children}
      {!noIcon && <Styled.CustomSquare />}
    </Styled.Title>
  );
};

export default Title;
