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
 *        <div>Test</div>
 *    )
 * }
 * ```
 */

import { EffectCallback, useEffect } from "react";

const useEffectOnce = (callback: EffectCallback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEffectOnce;
