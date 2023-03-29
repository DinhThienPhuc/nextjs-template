import { TButtonSize, TButtonVariant } from "./types";

import { IObject } from "@phantomthief/react-mui.utils";

export const BUTTON_SIZE: IObject<TButtonSize> = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const BUTTON_VARIANT: IObject<TButtonVariant> = {
  OUTLINED: "outlined",
  CONTAINED: "contained",
  TEXT: "text",
};
