/* BUTTON COMPONENT UTILS: Interfaces, Types, Constants, Functions, etc
   ========================================================================== */

import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { IObject } from "utils/interfaces";

/* Interfaces & Types & Enums
   ========================================================================== */

export type TVariant = "outlined" | "contained" | "text";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
}

/* Constants
   ========================================================================== */

export const VARIANT: IObject<TVariant> = {
  OUTLINED: "outlined",
  CONTAINED: "contained",
  TEXT: "text",
};

export const DEFAULT_PROPS = {
  variant: VARIANT.TEXT,
  loading: false,
};

/* Functions
      ========================================================================== */
