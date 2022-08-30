/* GALLERY COMPONENT UTILS: TOP_NAVIGATION
   ========================================================================== */

import { ReactNode } from "react";

/* Interfaces & Types & Enums
   ========================================================================== */

interface IItem {
  label: string | ReactNode;
  href: string;
}

export interface IProps {
  className?: string;
  items: IItem[];
}

/* Constants
   ========================================================================== */

/* Functions
   ========================================================================== */
