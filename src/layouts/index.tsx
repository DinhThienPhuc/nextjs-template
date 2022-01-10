import Navbar from "./components/navbar";
import { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import Styled from "./index.style";

interface IProps {
  children: ReactNode | string;
}

const LayoutDefault = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <Styled.Main>
        <Sidebar />
        <Styled.Content>{children}</Styled.Content>
      </Styled.Main>
    </>
  );
};

export default LayoutDefault;
