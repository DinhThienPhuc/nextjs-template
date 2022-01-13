import { ReactNode } from "react";
import Styled from "./index.style";

interface IProps {
  children: ReactNode | string;
  noPrefix?: boolean;
}

const SubTitle = ({ children, noPrefix }: IProps) => {
  return (
    <h2>
      {!noPrefix && <Styled.CustomDot />}
      {children}
    </h2>
  );
};

export default SubTitle;
