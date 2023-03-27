import { ReactNode } from "react";

export type TStyledTheme = "light" | "dark";

export type TStyledThemeContext = {
  theme: TStyledTheme;
  setTheme: (theme: TStyledTheme) => void;
};

export interface IStyledThemeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  defaultTheme: TStyledTheme;
  children: ReactNode;
}
