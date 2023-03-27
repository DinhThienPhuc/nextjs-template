import { ReactNode } from "react";
import { TVariant } from "_libs/utils";

export type THelperTextVariant = TVariant;

export interface IHelperTextProps {
  className?: string;
  variant: THelperTextVariant;
  text?: string | ReactNode;
}
