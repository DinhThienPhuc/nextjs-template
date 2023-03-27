import { ReactNode } from "react";

export interface INavbarProps {
  /** Navbar classname, allow to customize styles */
  className?: string;
  /** Custom left button for navbar */
  leftButton?: ReactNode;
  /** Custom right button for navbar */
  rightButton?: ReactNode;
  /** Custom title for navbar */
  title?: string | ReactNode;
}
