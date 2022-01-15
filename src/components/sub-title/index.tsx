import { ReactNode } from "react";
import Styled from "./index.style";

interface IProps {
  children: ReactNode | string;
  noPrefix?: boolean;
  id?: string;
}

const SubTitle = ({ children, noPrefix, id = "" }: IProps) => {
  return (
    <h2 id={id}>
      {!noPrefix && <Styled.CustomDot />}
      {children}
    </h2>
  );
};

export default SubTitle;
