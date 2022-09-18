/* COMPONENT UTILS: ACCORDION
   ========================================================================== */

import { ReactNode } from "react";

/* Interfaces & Types & Enums & Enums
   ========================================================================== */

export interface IPanel {
  label: ReactNode | string;
  value: ReactNode | string;
  expandItem?: ReactNode;
  disabled?: boolean;
}

export interface IProps {
  panels: IPanel[];
  className?: string;
  canMultiOpen?: boolean;
  expandItem?: ReactNode;
}

/* Constants
   ========================================================================== */

export const DEFAULT_PROPS = {
  canMultiOpen: false,
};

/* Functions
   ========================================================================== */
