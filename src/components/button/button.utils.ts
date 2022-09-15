/* BUTTON COMPONENT UTILS: Interfaces, Types, Constants, Functions, etc
   ========================================================================== */

import { ButtonHTMLAttributes, MouseEventHandler } from "react";

/* Interfaces & Types
   ========================================================================== */

export enum Color {
  Primary = "primary",
  Error = "error",
}

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/* Constants
   ========================================================================== */

/* Functions
      ========================================================================== */
