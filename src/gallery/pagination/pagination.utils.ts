import { IObject } from "utils/interfaces";
import { ReactNode } from "react";

/* GALLERY COMPONENT UTILS: PAGINATION
   ========================================================================== */

/* Interfaces & Types & Enums
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
const VARIANT: IObject<TVariant> = {
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
