import {
  ReactNode,
  UIEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react";

import BackgroundLightPng from "assets/bg-light.png";
import Img from "components/img";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Styled from "./index.style";

interface IProps {
  children: ReactNode | string;
}

const LayoutDefault = ({ children }: IProps) => {
  const layoutRef = useRef(null);

  const handleScroll = useCallback<UIEventHandler>((event) => {
    const scrollHeight = event.currentTarget.scrollHeight;
    console.log("scrollHeight", scrollHeight);
  }, []);

  useEffect(() => {
    // if (layoutRef && layoutRef.current) {
    //   layoutRef.current?.addEventListener('scroll', handleScroll)
    //   return () => {
    //     layoutRef.current?.removeEventListener('scroll', handleScroll)
    //   }
    // }
  }, [handleScroll]);

  return (
    <Styled.LayoutDefaultContainer ref={layoutRef}>
      <Styled.BackgroundLight>
        <Img src={BackgroundLightPng} alt="background-light" layout={"fill"} />
      </Styled.BackgroundLight>
      <Navbar />
      <Styled.Main>
        <Sidebar />
        <Styled.Content onScroll={handleScroll}>{children}</Styled.Content>
      </Styled.Main>
    </Styled.LayoutDefaultContainer>
  );
};

export default LayoutDefault;
