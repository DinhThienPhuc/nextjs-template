import { HTMLAttributes, ReactNode } from "react";

import Styled from "./index.style";

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode | string;
  noPrefix?: boolean;
}

const SubTitle = ({ children, noPrefix = false, ...props }: IProps) => {
  return (
    <h2 {...props}>
      {!noPrefix && <Styled.CustomDot />}
      {children}
    </h2>
  );
};

export default SubTitle;
