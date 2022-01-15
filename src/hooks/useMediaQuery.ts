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
