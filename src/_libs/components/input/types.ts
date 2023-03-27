import { InputHTMLAttributes, ReactNode } from "react";
import { TFunction, TVariant } from "_libs/utils";

export type TInputVariant = TVariant;

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string | ReactNode;
  hiddenLabel?: boolean;
  fullWidth?: boolean;
  variant?: TInputVariant;
  preAdorment?: ReactNode;
  postAdorment?: ReactNode;
  helperText?: string | ReactNode;
  clear?: TFunction<void>;
}
