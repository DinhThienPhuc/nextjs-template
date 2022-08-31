/* COMPONENT: TOP_NAVIGATION
      https://www.w3schools.com/howto/howto_js_topnav.asp 
      https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
   ========================================================================== */

import { useCallback, useMemo, useState } from "react";

import { IProps } from "./top-navigation.utils";
import Link from "next/link";
import Styled from "./top-navigation.style";
import cx from "classnames";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const TopNavigation = (props: IProps) => {
  const { className, items } = props;
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

  useWhyDidYouUpdate("TopNav", props);

  return (
    <Styled.TopNav className={cx("top-nav", className)}>
      {renderItems}
      <Styled.MenuIcon withAnimation onClick={handleToggleMobileMenu} />
    </Styled.TopNav>
  );
};

export default TopNavigation;
