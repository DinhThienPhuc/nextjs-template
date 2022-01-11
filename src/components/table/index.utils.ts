import { ReactNode } from "react";

interface ICell<T> {
  value: T[keyof T];
  cellData: T;
}

export type ISortOrder = "asc" | "desc" | "";

export interface ISort {
  field: string;
  value: ISortOrder;
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

export const sortOrder: ISortOrder[] = ["asc", "desc", ""];
