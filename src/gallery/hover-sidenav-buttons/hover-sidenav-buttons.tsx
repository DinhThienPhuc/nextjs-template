/* GALLERY COMPONENT: TOP_NAVIGATION
      https://www.w3schools.com/howto/howto_js_topnav.asp 
      https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
   ========================================================================== */

import { useCallback, useState } from "react";

import Link from "next/link";
import Styled from "./hover-sidenav-buttons.style";
import cx from "classnames";

interface IProps {
  className?: string;
}

const TopNavigation = ({ className }: IProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleToggleMobileMenu = useCallback((isActivated: boolean) => {
    setMobileMenuOpen(isActivated);
  }, []);

  return (
    <Styled.TopNav className={cx("top-nav", className)}>
      <Link href="#home" passHref>
        <Styled.Item isMobileMenuOpen={isMobileMenuOpen}>Home</Styled.Item>
      </Link>
      <Link href="#news" passHref>
        <Styled.Item isMobileMenuOpen={isMobileMenuOpen}>News</Styled.Item>
      </Link>
      <Link href="#contact" passHref>
        <Styled.Item isMobileMenuOpen={isMobileMenuOpen}>Contact</Styled.Item>
      </Link>
      <Link href="#about" passHref>
        <Styled.Item isMobileMenuOpen={isMobileMenuOpen}>About</Styled.Item>
      </Link>
      <Styled.MenuIcon withAnimation onClick={handleToggleMobileMenu} />
    </Styled.TopNav>
  );
};

export default TopNavigation;
