import BackgroundLightPng from "assets/bg-light.png";
import Img from "components/img";
import Navbar from "./components/navbar";
import { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import Styled from "./default.style";
import TableOfContent from "./components/table-of-content";
import useMediaQuery from "hooks/useMediaQuery";

interface IProps {
  children: ReactNode | string;
}

const LayoutDefault = ({ children }: IProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isMediumDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <Styled.LayoutDefaultContainer>
      <Styled.BackgroundLight>
        <Img src={BackgroundLightPng} alt="background-light" layout={"fill"} />
      </Styled.BackgroundLight>
      <Navbar />
      <Styled.Main>
        {isDesktop && <Sidebar />}
        <Styled.Content id={"default-content"}>{children}</Styled.Content>
        {isMediumDesktop && <TableOfContent />}
      </Styled.Main>
    </Styled.LayoutDefaultContainer>
  );
};

export default LayoutDefault;
