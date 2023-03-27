import { ReactNode } from "react";
import { TFunction } from "@iris/utils";

export interface IErrorBoundaryProps {
  onReset: TFunction<void>;
  children: ReactNode | null;
  errorChildren?: ReactNode | null;
}

export interface IErrorBoundaryState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorInfo: any;
}
