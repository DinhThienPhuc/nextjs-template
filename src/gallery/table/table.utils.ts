import { ReactNode } from "react";

interface ICell<T> {
  value: T[keyof T];
  cellData: T;
}

type TSortOrder = "asc" | "desc" | "";

export interface ISort {
  field: string;
  value: TSortOrder;
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

export const sortOrder: TSortOrder[] = ["asc", "desc", ""];
