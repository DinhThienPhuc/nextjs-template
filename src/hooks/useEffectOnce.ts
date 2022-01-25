import { DependencyList, EffectCallback, useEffect, useRef } from "react";

const useEffectOnce = (callback: EffectCallback, deps?: DependencyList) => {
  const hasRunOnce = useRef(false);

  useEffect(() => {
    if (deps && !hasRunOnce.current) {
      callback();
      hasRunOnce.current = true;
    }
  }, [callback, deps]);
};

export default useEffectOnce;
