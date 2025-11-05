"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      // @ts-ignore
      setIsMobile(!!("matches" in e ? e.matches : e.currentTarget?.matches));
    };
    onChange(mql as any);
    if (typeof mql.addEventListener === "function") mql.addEventListener("change", onChange as any);
    else mql.addListener(onChange as any);
    return () => {
      if (typeof mql.removeEventListener === "function") mql.removeEventListener("change", onChange as any);
      else mql.removeListener(onChange as any);
    };
  }, [breakpoint]);
  return isMobile;
}


