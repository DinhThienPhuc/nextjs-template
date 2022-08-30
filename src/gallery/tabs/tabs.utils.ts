/* GALLERY COMPONENT UTILS: TABS
   ========================================================================== */

import { ReactNode } from "react";

/* Interfaces & Types & Enums
   ========================================================================== */

interface IPanel {
  label: ReactNode | string;
  content: ReactNode | string;
  id: string;
  disabled?: boolean;
}

export interface IProps {
  panels: IPanel[];
  className?: string;
  isVertical?: boolean;
}

/* Constants
   ========================================================================== */

export const DEFAULT_PROPS = {
  isVertical: false,
};

/* Functions
   ========================================================================== */
