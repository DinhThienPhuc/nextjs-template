/* LAYOUT COMPONENT: DEFAULT
   ========================================================================== */

import Navbar from "./navbar";
import { ReactNode } from "react";
import Styled from "./default.style";

interface IProps {
  children: ReactNode | string;
}

const LayoutDefault = ({ children }: IProps) => {
  return (
    <Styled.LayoutComponent>
      <Navbar />
      <Styled.Main>{children}</Styled.Main>
    </Styled.LayoutComponent>
  );
};

export default LayoutDefault;
