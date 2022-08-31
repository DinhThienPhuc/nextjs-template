/* GALLERY COMPONENT UTILS: BREADCRUMB
   ========================================================================== */

import { ReactNode } from "react";

/* Interfaces & Types & Enums
   ========================================================================== */

interface IItem {
  path: string;
  label: ReactNode | string;
}

export interface IProps {
  className?: string;
  separator?: ReactNode | string;
  items?: IItem[];
  activePath?: string;
}

/* Constants
   ========================================================================== */

/* Functions
   ========================================================================== */