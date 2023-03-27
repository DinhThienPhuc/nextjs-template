import { TFunction, TVariant } from "@iris/utils";

import { ReactNode } from "react";

export type TPostAdormentVariant = TVariant;

export interface IPostAdormentProps {
  className?: string;
  variant: TPostAdormentVariant;
  content: ReactNode;
  clear?: TFunction<void>;
}
