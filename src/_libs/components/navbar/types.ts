import { ReactNode } from "react";

export interface INavbarProps {
  className?: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
  title?: string | ReactNode;
}
