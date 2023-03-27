import { ReactNode } from "react";
import { TVariant } from "_libs/utils";

export type TPreAdormentVariant = TVariant;

export interface IPreAdormentProps {
  className?: string;
  variant: TPreAdormentVariant;
  content: ReactNode;
}
