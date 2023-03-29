import { TFunction, TVariant } from "@phantomthief/react-mui.utils";

import { ReactNode } from "react";

export type TPostAdormentVariant = TVariant;

export interface IPostAdormentProps {
  className?: string;
  variant: TPostAdormentVariant;
  content: ReactNode;
  clear?: TFunction<void>;
}
