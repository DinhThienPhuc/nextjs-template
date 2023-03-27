import { ReactNode } from "react";
import { TVariant } from "@iris/utils";

export type TLabelVariant = TVariant;

export interface ILabelProps {
  className?: string;
  content: string | ReactNode;
  required?: boolean;
  disabled?: boolean;
  hiddenLabel?: boolean;
  variant: TLabelVariant;
  isLabelCollapsed: boolean;
}
