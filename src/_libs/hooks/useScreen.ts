import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import { useState } from "react";

const useScreen = () => {
  const getScreen = () => {
    if (typeof window !== "undefined" && window.screen) {
      return window.screen;
    }
    return undefined;
  };

  const [screen, setScreen] = useState<Screen | undefined>(getScreen());

  function handleSize() {
    setScreen(getScreen());
  }

  useEventListener("resize", handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return screen;
};

export default useScreen;
