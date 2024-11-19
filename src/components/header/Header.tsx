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
