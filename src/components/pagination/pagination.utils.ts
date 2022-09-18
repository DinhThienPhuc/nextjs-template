/* COMPONENT UTILS: PAGINATION
   ========================================================================== */

import { IObject } from "utils/interfaces";
import { ReactNode } from "react";

/* Interfaces & Types & Enums & Enums
   ========================================================================== */

export type TVariant = "normal" | "outlined" | "rounded";

export interface IProps {
  className?: string;
  variant?: TVariant;
  size?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
  prevIcon?: ReactNode | string;
  nextIcon?: ReactNode | string;
  totalPages: number;
  onChange?: (selectedPage: number) => void;
  disabled?: boolean;
  boundaryCount?: number;
  siblingCount?: number;
  isLong?: boolean;
}

/* Constants
   ========================================================================== */

export const VARIANT: IObject<TVariant> = {
  NORMAL: "normal",
  OUTLINED: "outlined",
  ROUNDED: "rounded",
};

export const DEFAULT_PROPS = {
  hidePrevButton: false,
  hideNextButton: false,
  disabled: false,
  showFirstButton: false,
  showLastButton: false,
  variant: VARIANT.NORMAL,
  size: 32,
};

/* Functions
   ========================================================================== */