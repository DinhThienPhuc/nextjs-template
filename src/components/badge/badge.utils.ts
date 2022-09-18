/* COMPONENT UTILS: BADGE
   ========================================================================== */

import { ReactNode } from "react";

/* Interfaces & Types & Enums & Enums
   ========================================================================== */

export interface IProps {
  className?: string;
  children: ReactNode | string;
  counter?: number;
  customCounter?: ReactNode;
  showZero?: boolean;
  max?: number;
}

/* Constants
   ========================================================================== */

export const DEFAULT_PROPS = {
  counter: 0,
  showZero: false,
  max: 99,
};

/* Functions
   ========================================================================== */
