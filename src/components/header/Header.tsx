// "use client";
// import styles from "./Headerstyle.module.css";
// import { Fade as Hamburger } from "hamburger-react";
// import { useState, useEffect } from "react";
// import links from "@/data/links";
// import Aside from "../aside/Aside";
// import Link from "next/link";
// import Image from "next/image";

// function Header() {
//   const [isOpen, setOpen] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(window.scroll);

//   const handleScroll = () => {
//     if (window.scrollY > lastScrollY && window.scrollY > 100) {
//       setIsHidden(true); // Scrolling down
//     } else {
//       setIsHidden(false); // Scrolling up
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]); // Only update lastScrollY when needed

//   return (
//     <header
//       className={`${styles.header_Container} ${
//         isHidden ? styles.scroll_hidden : ""
//       }`}
//     >
//       <nav>
//         <div className={styles.burgerIcon}>
//           <Hamburger toggled={isOpen} toggle={setOpen} rounded />
//         </div>
//         <Link href="/" className={styles.logo}>
//           <Image src="/logo.png" alt="logo" width={158} height={71} />
//         </Link>
//         <h1 className={styles.mainTitle}>Bling Weddings</h1>
//         <div className={styles.links_Container}>
//           <ul className={styles.links_List}>
//             {links.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   className={({ isActive }) => (isActive ? styles.active : "")}
//                   href={`${link.path}`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <Aside isOpen={isOpen} setOpen={setOpen} />
//       </nav>
//     </header>
//   );
// }

// export default Header;
// "use client";

// import styles from "./Headerstyle.module.css";
// import { Fade as Hamburger } from "hamburger-react";
// import { useState, useEffect, useCallback } from "react";
// import links from "@/data/links";
// import Aside from "../aside/Aside";
// import Link from "next/link";
// import Image from "next/image";

// function Header() {
//   // State variables
//   const [isOpen, setOpen] = useState(false); // For hamburger menu
//   const [isHidden, setIsHidden] = useState(false); // For header visibility
//   const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position

//   // Scroll handler
//   const handleScroll = useCallback(() => {
//     if (window.scrollY > lastScrollY && window.scrollY > 100) {
//       setIsHidden(true); // Hide header when scrolling down
//     } else {
//       setIsHidden(false); // Show header when scrolling up
//     }
//     setLastScrollY(window.scrollY);
//   }, [lastScrollY]);

//   // Add/remove scroll event listener
//   useEffect(() => {
//     // Set initial scroll position on the client
//     setLastScrollY(window.scrollY);

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   return (
//     <header
//       className={`${styles.header_Container} ${
//         isHidden ? styles.scroll_hidden : ""
//       }`}
//     >
//       <nav>
//         {/* Hamburger menu toggle */}
//         <div className={styles.burgerIcon}>
//           <Hamburger toggled={isOpen} toggle={setOpen} rounded />
//         </div>

//         {/* Logo */}
//         <Link href="/" className={styles.logo}>
//           <Image src="/logo.png" alt="logo" width={158} height={71} />
//         </Link>

//         {/* Title */}
//         <h1 className={styles.mainTitle}>Bling Weddings</h1>

//         {/* Navigation links */}
//         <div className={styles.links_Container}>
//           <ul className={styles.links_List}>
//             {links.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   href={link.path}
//                   className={({ isActive }: string) =>
//                     isActive ? styles.active : ""
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Aside menu */}
//         <Aside isOpen={isOpen} setOpen={setOpen} />
//       </nav>
//     </header>
//   );
// }

// export default Header;
"use client";

import styles from "./Headerstyle.module.css";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import links from "@/data/links";
import Aside from "../aside/Aside";
import Link from "next/link";
import Image from "next/image";

const Hamburger = dynamic(() => import("hamburger-react"), { ssr: false });

function Header() {
  const [isOpen, setOpen] = useState(false); // For hamburger menu
  const [isHidden, setIsHidden] = useState(false); // Header visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior
  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100); // Hide on scroll down
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLastScrollY(window.scrollY); // Initialize scroll position
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`${styles.header_Container} ${
        isHidden ? styles.scroll_hidden : ""
      }`}
    >
      <nav>
        <div className={styles.burgerIcon}>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={158} height={71} />
        </Link>
        <h1 className={styles.mainTitle}>Bling Weddings</h1>
        <div className={styles.links_Container}>
          <ul className={styles.links_List}>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className={styles.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Aside isOpen={isOpen} setOpen={setOpen} />
      </nav>
    </header>
  );
}

export default Header;
