/* GALLERY COMPONENT: TOP_NAVIGATION
      https://www.w3schools.com/howto/howto_js_topnav.asp 
      https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
   ========================================================================== */

import { ReactNode, useCallback, useMemo, useState } from "react";

import Link from "next/link";
import Styled from "./top-navigation.style";
import cx from "classnames";

interface IItem {
  label: string | ReactNode;
  href: string;
}

interface IProps {
  className?: string;
  items: IItem[];
}

const TopNavigation = ({ className, items }: IProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleToggleMobileMenu = useCallback((isActivated: boolean) => {
    setMobileMenuOpen(isActivated);
  }, []);

  const renderItems = useMemo(() => {
    return items.map((item) => {
      return (
        <Link key={item.href} href={item.href} passHref>
          <Styled.Item isMobileMenuOpen={isMobileMenuOpen}>
            {item.label}
          </Styled.Item>
        </Link>
      );
    });
  }, [isMobileMenuOpen, items]);

  return (
    <Styled.TopNav className={cx("top-nav", className)}>
      {renderItems}
      <Styled.MenuIcon withAnimation onClick={handleToggleMobileMenu} />
    </Styled.TopNav>
  );
};

export default TopNavigation;
