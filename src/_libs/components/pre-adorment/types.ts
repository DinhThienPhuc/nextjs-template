import { ReactNode } from "react";
import { TVariant } from "@iris/utils";

export type TPreAdormentVariant = TVariant;

export interface IPreAdormentProps {
  className?: string;
  variant: TPreAdormentVariant;
  content: ReactNode;
}
