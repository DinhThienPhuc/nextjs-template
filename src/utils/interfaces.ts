import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";

export type INextPageCustomized = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  getHead?: () => ReactNode;
};

export type IAppPropsCustomized = AppProps & {
  Component: INextPageCustomized;
};

export interface ITableContentItems {
  label: string | ReactNode;
  id: string;
  isVisible: boolean;
}
