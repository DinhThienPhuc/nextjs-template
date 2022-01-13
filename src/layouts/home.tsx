import BackgroundLightPng from "assets/bg-light.png";
import Img from "components/img";
import Navbar from "./components/navbar";
import { ReactNode } from "react";
import Styled from "./home.style";

interface IProps {
  children: ReactNode | string;
}

const LayoutHome = ({ children }: IProps) => {
  return (
    <Styled.LayoutHomeContainer>
      <Styled.BackgroundLight>
        <Img src={BackgroundLightPng} alt="background-light" layout={"fill"} />
      </Styled.BackgroundLight>
      <Navbar />
      <Styled.Main>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Main>
    </Styled.LayoutHomeContainer>
  );
};

export default LayoutHome;
