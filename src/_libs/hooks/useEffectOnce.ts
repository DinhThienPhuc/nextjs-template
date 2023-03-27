import { EffectCallback, useEffect } from "react";

const useEffectOnce = (effect: EffectCallback) => {
  // NOTED: disable to emulate didMount effect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};

export default useEffectOnce;
