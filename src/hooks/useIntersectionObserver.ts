"use client";

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.disconnect();
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px",
        threshold: 0.01,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return { isVisible, elementRef };
};
