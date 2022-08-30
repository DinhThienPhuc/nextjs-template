/* HOOK: USE_EFFECT_ONE
   ========================================================================== */

import { EffectCallback, useEffect } from "react";

const useEffectOnce = (callback: EffectCallback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEffectOnce;
