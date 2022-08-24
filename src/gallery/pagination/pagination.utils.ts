import { ReactNode } from "react";

export type TVariant = "normal" | "outlined" | "rounded";

export const VARIANT: {
  [key: string]: TVariant;
} = {
  NORMAL: "normal",
  OUTLINED: "outlined",
  ROUNDED: "rounded",
};

export interface IProps {
  className?: string;
  variant?: TVariant;
  size?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
  prevIcon?: ReactNode | string;
  nextIcon?: ReactNode | string;
  totalPages: number;
  onChange?: (selectedPage: number) => void;
  disabled?: boolean;
  boundaryCount?: number;
  siblingCount?: number;
  isLong?: boolean;
}
