import Navbar from "./navbar";
import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Styled from "./component.style";
import useMediaQuery from "hooks/useMediaQuery";

interface IProps {
  children: ReactNode | string;
}

const LayoutComponent = ({ children }: IProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <Styled.LayoutComponent>
      <Navbar />
      <Styled.Main>
        {isDesktop && <Sidebar />}
        <Styled.Content>{children}</Styled.Content>
      </Styled.Main>
    </Styled.LayoutComponent>
  );
};

export default LayoutComponent;
