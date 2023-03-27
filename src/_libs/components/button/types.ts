import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export type TButtonSize = "small" | "medium" | "large";

export type TButtonVariant = "outlined" | "contained" | "text";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Size of button */
  size?: TButtonSize;
  /** Variant of button */
  variant?: TButtonVariant;
  /** Button classname, allow to customize styles */
  className?: string;
  /** Click event handler */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
