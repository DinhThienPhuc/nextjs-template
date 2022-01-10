import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";

export type NextPageCustomized = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  getHead?: () => ReactNode;
};

export type AppPropsCustomized = AppProps & {
  Component: NextPageCustomized;
};
