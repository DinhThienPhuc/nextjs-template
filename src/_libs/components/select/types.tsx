import { HTMLAttributes, ReactNode } from "react";

import { TVariant } from "@phantomthief/react-mui.utils";

export interface ISelectOption {
  value: string;
  label: ReactNode | string;
}

export type TSelectVariant = TVariant;

export interface ISelectProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  options: ISelectOption[];
  label?: ReactNode | string;
  value?: string;
  fullWidth?: boolean;
  variant?: TSelectVariant;
  helperText?: string | ReactNode;
  disabled?: boolean;
  required?: boolean;
  hiddenLabel?: boolean;
}

export interface ISelectEventTarget extends EventTarget {
  value: string;
}
