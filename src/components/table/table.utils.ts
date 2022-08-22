/* COMPONENT UTILS: TABLE
   ========================================================================== */

import { ReactNode } from "react";

/* Interfaces & Types & Enums
   ========================================================================== */

interface ICell<T> {
  value: T[keyof T];
  cellData: T;
}

export enum ESortOrder {
  ASC = "asc",
  DESC = "desc",
  NONE = "none",
}

export interface ISort {
  field: string;
  value: ESortOrder;
}

export interface IColumn<T> {
  isSort?: boolean;
  headerName: string | ReactNode;
  field: string;
  renderCell?: ({ value, cellData }: ICell<T>) => ReactNode;
}

export interface IProps<T> {
  caption?: string;
  className?: string;
  data: T[];
  columns: IColumn<T>[];
  onSort?: (params: ISort) => void;
  sort?: ISort;
}

/* Constants
   ========================================================================== */

export const SORT_ORDER: ESortOrder[] = [
  ESortOrder.ASC,
  ESortOrder.DESC,
  ESortOrder.NONE,
];

/* Functions
   ========================================================================== */
