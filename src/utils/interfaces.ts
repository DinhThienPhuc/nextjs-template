/* GLOBAL INTERFACES & TYPES
   ========================================================================== */

import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";

/**
 * Extends NextPage props with new this.props
 * @type getLayout: return custom layout as wrapper of page (optional)
 * @type getHead: return custom head for specific page (optional)
 */
export type TNextPageCustomized = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  getHead?: () => ReactNode;
};

/**
 * Extends AppProps with new Component type
 */
export type TAppPropsCustomized = AppProps & {
  Component: TNextPageCustomized;
};

export interface IObject<T> {
  [key: string]: T;
}
