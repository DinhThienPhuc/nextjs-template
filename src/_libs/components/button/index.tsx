import { BUTTON_SIZE, BUTTON_VARIANT } from "./constants";

import { IButtonProps } from "./types";
import React from "react";
import { Styled } from "./style";
import cx from "classnames";

export const Button = ({
  variant = BUTTON_VARIANT["TEXT"],
  size = BUTTON_SIZE["MEDIUM"],
  className,
  children,
  onClick,
  ...props
}: IButtonProps) => {
  return (
    <Styled.Container
      {...props}
      variant={variant}
      size={size}
      onClick={onClick}
      className={cx(
        "button",
        `button-size__${size}`,
        `button-variant__${variant}`,
        className,
      )}
    >
      {children}
    </Styled.Container>
  );
};
