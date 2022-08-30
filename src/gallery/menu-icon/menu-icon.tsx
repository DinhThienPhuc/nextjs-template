/* GALLERY COMPONENT: MENU_ICON - https://www.w3schools.com/howto/howto_css_menu_icon.asp
   ========================================================================== */

import { useCallback, useState } from "react";

import { IProps } from "./menu-icon.utils";
import Styled from "./menu-icon.style";
import cx from "classnames";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

const MenuIcon = (props: IProps) => {
  const { withAnimation, className, onClick } = props;
  const [isActivated, setActive] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => {
    if (withAnimation) {
      setActive(!isActivated);
    }
    onClick?.(!isActivated);
  }, [isActivated, onClick, withAnimation]);

  useWhyDidYouUpdate("MenuIcon", props);

  return (
    <Styled.MenuIcon
      onClick={handleToggleMenu}
      className={cx("menu-icon", className)}
      isActivated={isActivated}
    >
      <div className="line first" />
      <div className="line second" />
      <div className="line third" />
    </Styled.MenuIcon>
  );
};

export default MenuIcon;
