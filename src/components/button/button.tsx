/* BUTTON COMPONENT
   ========================================================================== */

import { Color, IProps, Size } from "./button.utils";
import { MouseEvent, useCallback } from "react";

import Styled from "./button.style";

const Button = ({
  color = Color.Primary,
  size = Size.Medium,
  className,
  children,
  onClick,
}: IProps) => {
  const handleClick = useCallback(
    (e: MouseEvent<any, globalThis.MouseEvent>) => {
      onClick?.(e);
    },
    [onClick],
  );

  return (
    <Styled.Container
      className={className}
      color={color}
      size={size}
      onClick={handleClick}
    >
      <Styled.Text className="text">{children}</Styled.Text>
    </Styled.Container>
  );
};

export default Button;
