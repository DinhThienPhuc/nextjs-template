import { FocusEvent, FocusEventHandler, useCallback, useState } from "react";

export const useFocusWithCallback = (
  onFocus: FocusEventHandler<HTMLElement> | undefined,
  onBlur: FocusEventHandler<HTMLElement> | undefined,
) => {
  const [isFocused, setFocus] = useState<boolean>(false);

  const captureOnFocus = useCallback(
    (e: FocusEvent<HTMLElement, Element>) => {
      onFocus?.(e);
      setFocus(true);
    },
    [onFocus],
  );

  const captureOnBlur = useCallback(
    (e: FocusEvent<HTMLElement, Element>) => {
      onBlur?.(e);
      setFocus(false);
    },
    [onBlur],
  );

  return {
    captureOnFocus,
    captureOnBlur,
    isFocused,
  };
};
