/* HOOK: USE_ƯHY_ĐI_YOU_UPDATE
   ========================================================================== */

import { useEffect, useRef } from "react";

import { IObject } from "utils/interfaces";

const useWhyDidYouUpdate = (name: string, props: IObject<any>) => {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef<IObject<any>>({});

  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });

      // Use this object to keep track of changed props
      const changesObj: IObject<any> = {};

      // Iterate through keys
      allKeys.forEach((key: string) => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        // eslint-disable-next-line no-console
        console.log("[why-did-you-update]", name, changesObj);
      }
    }
    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
};

export default useWhyDidYouUpdate;
