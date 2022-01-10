import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

export type NextPageCustomized = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  getHead?: () => ReactNode;
};

export type AppPropsCustomized = AppProps & {
  Component: NextPageCustomized;
};
