/* GALLERY COMPONENT: MENU_ICON - https://www.w3schools.com/howto/howto_css_menu_icon.asp
   ========================================================================== */

import { useCallback, useState } from "react";

import Styled from "./menu-icon.style";
import cx from "classnames";

interface IProps {
  withAnimation?: boolean;
  className?: string;
}

const MenuIcon = ({ withAnimation, className }: IProps) => {
  const [isActivated, setActive] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => {
    if (withAnimation) {
      setActive(!isActivated);
    }
  }, [isActivated, withAnimation]);

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
