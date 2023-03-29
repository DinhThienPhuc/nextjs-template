import { INavbarProps } from "./types";
import React from "react";
import { Styled } from "./style";
import cx from "classnames";

export const Navbar = ({
  title,
  leftButton,
  rightButton,
  className,
}: INavbarProps) => {
  return (
    <Styled.Container className={cx("navbar", className)}>
      <Styled.LeftButton className="navbar-button navbar-button__left">
        {leftButton}
      </Styled.LeftButton>
      <Styled.Title className="navbar-title">{title}</Styled.Title>
      <Styled.RightButton className="navbar-button navbar-button__right">
        {rightButton}
      </Styled.RightButton>
    </Styled.Container>
  );
};
