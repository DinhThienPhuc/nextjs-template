import { Navbar } from "./navbar";
import { ReactNode } from "react";
import { Styled } from "./style";

interface IProps {
  children: ReactNode | string;
}

export const Layout = ({ children }: IProps) => {
  return (
    <Styled.LayoutComponent>
      <Navbar />
      <Styled.Main>{children}</Styled.Main>
    </Styled.LayoutComponent>
  );
};
