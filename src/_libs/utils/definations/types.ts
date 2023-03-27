import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";

export type TFunctionComponent = () => ReactNode;

export type TFunctionHighOrderComponent = (
  component: ReactElement | ReactNode,
) => ReactNode;

export type TFunctionIterator = <T>(
  value: T,
  index?: number,
  array?: T[],
) => unknown;

export type TFunction<RT> = <T>(item?: T) => RT;

export type TNextPageCustomized = NextPage & {
  getLayout?: TFunctionHighOrderComponent;
  getHead?: TFunctionComponent;
};

export type TAppPropsCustomized = AppProps & {
  Component: TNextPageCustomized;
};

export interface IObject<T> {
  [key: string]: T;
}

export type TTryCatchResult<T> = {
  error: unknown | null;
  result: T | null;
};

export type TVariant = "filled" | "outlined" | "standard";

export interface IPosition {
  left: number;
  top: number;
  width: number;
  height: number;
}
