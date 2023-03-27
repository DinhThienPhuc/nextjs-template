import { TFunction, TVariant } from "_libs/utils";

import { ReactNode } from "react";

export type TPostAdormentVariant = TVariant;

export interface IPostAdormentProps {
  className?: string;
  variant: TPostAdormentVariant;
  content: ReactNode;
  clear?: TFunction<void>;
}
