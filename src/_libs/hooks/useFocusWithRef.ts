import { MutableRefObject, useState } from "react";

import { useEffectOnce } from "./useEffectOnce";

export const useFocusWithRef = (
  ref: MutableRefObject<HTMLElement | null>,
  defaultState = false,
) => {
  const [state, setState] = useState(defaultState);

  useEffectOnce(() => {
    const onFocus = () => setState(true);
    const onBlur = () => setState(false);

    ref.current?.addEventListener("focus", onFocus, true);
    ref.current?.addEventListener("blur", onBlur, true);

    return () => {
      ref.current?.removeEventListener("focus", onFocus);
      ref.current?.removeEventListener("blur", onBlur);
    };
  });

  return state;
};
