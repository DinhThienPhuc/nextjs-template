import { ReactNode } from "react";
import { TVariant } from "@phantomthief/react-mui.utils";

export type TPreAdormentVariant = TVariant;

export interface IPreAdormentProps {
  className?: string;
  variant: TPreAdormentVariant;
  content: ReactNode;
}
