import BackgroundLightPng from "assets/bg-light.png";
import Img from "components/img";
import Navbar from "./components/navbar";
import { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import Styled from "./index.style";

interface IProps {
  children: ReactNode | string;
}

const LayoutDefault = ({ children }: IProps) => {
  return (
    <Styled.LayoutDefaultContainer>
      <Styled.BackgroundLight>
        <Img src={BackgroundLightPng} alt="background-light" layout={"fill"} />
      </Styled.BackgroundLight>
      <Navbar />
      <Styled.Main>
        <Sidebar />
        <Styled.Content>{children}</Styled.Content>
      </Styled.Main>
    </Styled.LayoutDefaultContainer>
  );
};

export default LayoutDefault;
