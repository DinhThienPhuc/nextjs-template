import Navbar from "./navbar";
import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Styled from "./component.style";
import TableOfContent from "./table-of-content";
import useMediaQuery from "hooks/useMediaQuery";

interface IProps {
  children: ReactNode | string;
  tableOfContent?: string[];
}

const LayoutComponent = ({ children, tableOfContent }: IProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isMediumDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <Styled.LayoutComponent>
      <Navbar />
      <Styled.Main>
        {isDesktop && <Sidebar />}
        <Styled.Content>{children}</Styled.Content>
        {isMediumDesktop && <TableOfContent items={tableOfContent} />}
      </Styled.Main>
    </Styled.LayoutComponent>
  );
};

export default LayoutComponent;
