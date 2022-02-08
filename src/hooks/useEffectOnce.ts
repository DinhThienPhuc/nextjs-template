/* HOOK: USE_EFFECT_ONE
   ========================================================================== */

/**
 * Just modified version of useEffect that's executed only one time, at the mounting time.
 *
 * @param query css media query
 *
 * @example
 * ```
 * import React from 'react'
 * import useEffectOnce from 'hooks/useEffectOnce'
 *
 * export default function Component() {
 *    useEffectOnce(() => {
 *        console.log('Triggered only once, on mount', { data })
 *    })
 *
 *    return (
 *        <div>
 *            {isMobile ? "Mobile screen" : "Tablet or Desktop screen"}
 *        </div>
 *    )
 * }
 * ```
 */

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
