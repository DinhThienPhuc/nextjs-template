/* HOOK: USE_MEDIA_QUERY
   ========================================================================== */

/**
 * Checks if the current environment matches a given media query and returns the appropriate value.
 *
 * @param query css media query
 *
 * @example
 * ```
 * import React, { useRef } from 'react'
 * import useMediaQuery from 'hooks/useMediaQuery'
 *
 * export default function Component() {
 *    // Check if is mobile
 *    const isMobile = useMediaQuery("(max-width: 400px)")
 *
 *    return (
 *        <div>
 *            {isMobile ? "Mobile screen" : "Tablet or Desktop screen"}
 *        </div>
 *    )
 * }
 * ```
 */

import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatch(media.matches);

    const handleChange = () => setMatch(media.matches);

    if ("addEventListener" in media) {
      media.addEventListener("change", handleChange);
      return () => {
        media.removeEventListener("change", handleChange);
      };
    } else {
      media.addListener(handleChange);
      return () => {
        media.removeListener(handleChange);
      };
    }
  }, [query]);

  return match;
};

export default useMediaQuery;
