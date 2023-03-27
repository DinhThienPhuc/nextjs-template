import { IPosition, TFunction } from "_libs/utils/definations/types";

import { MutableRefObject } from "react";
import { parseJSON } from "_libs/utils/helpers/base";

export const logger = { ...console };

export const reload: TFunction<void> = () => {
  window.location.reload();
};

export const getFromSessionStorage = <T>(key: string): T | null => {
  const value = window.sessionStorage.getItem(key);

  if (value) {
    return parseJSON(value);
  }
  return null;
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return parseJSON(value);
  }
  return null;
};

export const getPositionOfNode = (
  ref: MutableRefObject<HTMLElement | null>,
  withScrollable = true,
): IPosition => {
  const bounds = ref.current?.getBoundingClientRect();
  return {
    left: bounds?.x || 0,
    top:
      (bounds?.y || 0) +
      (bounds?.height || 0) +
      (withScrollable ? window?.scrollY : 0),
    width: bounds?.width || 0,
    height: bounds?.height || 0,
  };
};
