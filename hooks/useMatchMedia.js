import { useState, useEffect } from "react";

const useMatchMedia = (mediaQueryString) => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const mql = window.matchMedia(mediaQueryString);
    setMatches(mql.matches);

    const updateMatches = (e) => {
      setMatches(e.matches);
    };
    mql.addListener(updateMatches);

    return () => {
      mql.removeListener(updateMatches);
    };
  }, [mediaQueryString]);

  return matches;
};

export default useMatchMedia;
