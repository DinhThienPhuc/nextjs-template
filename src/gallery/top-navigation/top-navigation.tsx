/* GALLERY COMPONENT: TOP_NAVIGATION
      https://www.w3schools.com/howto/howto_js_topnav.asp 
      https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
   ========================================================================== */

import { ReactNode, useCallback, useMemo, useState } from "react";

import Link from "next/link";
import Styled from "./top-navigation.style";
import cx from "classnames";

interface IPanel {
  label: ReactNode | string;
  content: ReactNode | string;
  id: string;
}

interface IProps {
  className?: string;
}

const TopNavigation = ({ className }: IProps) => {
  return (
    <Styled.TopNav className={cx("top-nav", className)} id="myTopnav">
      <Link href="#home" passHref>
        <Styled.Item>Home</Styled.Item>
      </Link>
      <Link href="#news" passHref>
        <Styled.Item>News</Styled.Item>
      </Link>
      <Link href="#contact" passHref>
        <Styled.Item>Contact</Styled.Item>
      </Link>
      <Link href="#about" passHref>
        <Styled.Item>About</Styled.Item>
      </Link>
      <Styled.MenuIcon withAnimation />
    </Styled.TopNav>
  );
};

export default TopNavigation;
