// "use client";
// import { useEffect, useRef, useState } from "react";

// export const useIntersectionObserver = () => {
//   const [visibleItems, setVisibleItems] = useState<number[]>([]);
//   const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry, index) => {
//           if (entry.isIntersecting && !visibleItems.includes(index)) {
//             setVisibleItems((prev) => [...prev, index]);
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0,
//       }
//     );

//     // elementsRef.current.forEach((ref) => ref && observer.observe(ref));
//     elementsRef.current.forEach((ref) => {
//       if (ref) observer.observe(ref); // Check for null before observing
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [visibleItems]);
//   return { visibleItems, elementsRef };
// };
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
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
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
