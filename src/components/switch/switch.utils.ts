/* COMPONENT UTILS: SWITCH
   ========================================================================== */

import { MouseEventHandler, ReactNode } from "react";

/* Interfaces & Types & Enums & Enums
   ========================================================================== */

export interface IProps {
  className?: string;
  disabled?: boolean;
  width?: number;
  height?: number;
  size?: number;
  preText?: ReactNode | string;
  postText?: ReactNode | string;
  customSlider?: ReactNode;
  isCircle?: boolean;
  checked: boolean;
  onChange?: MouseEventHandler<HTMLDivElement>;
}

/* Constants
   ========================================================================== */

export const DEFAULT_PROPS = {
  width: 34,
  height: 14,
  size: 18,
  disabled: false,
};

/* Functions
   ========================================================================== */
