/* COMPONENT UTILS: ALERT
   ========================================================================== */

import { IObject } from "utils/interfaces";
import Icons from "assets/icons";
import { ReactNode } from "react";

/* Interfaces & Types & Enums
   ========================================================================== */

export type TSeverity = "info" | "success" | "warning" | "error";

export type TVariant = "filled" | "outlined" | "default";

export interface IProps {
  className?: string;
  children: ReactNode | string;
  severity?: TSeverity;
  onClose?: () => void;
  action?: ReactNode;
  icon?: ReactNode;
  variant?: TVariant;
  title?: ReactNode | string;
}

export interface ITitleProps {
  className?: string;
  children: ReactNode | string;
}

/* Constants
   ========================================================================== */

export const SEVERITY: IObject<TSeverity> = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

export const VARIANT: IObject<TVariant> = {
  DEFAULT: "default",
  OUTLINED: "outlined",
  FILLED: "filled",
};

export const SEVERITY_ICON_DICTIONARY = {
  [SEVERITY.INFO]: Icons.Info,
  [SEVERITY.SUCCESS]: Icons.CheckCircle,
  [SEVERITY.WARNING]: Icons.AlertTriangle,
  [SEVERITY.ERROR]: Icons.AlertCircle,
};

export const DEFAULT_PROPS = {
  severity: SEVERITY.INFO,
  variant: VARIANT.DEFAULT,
};

/* Functions
   ========================================================================== */
