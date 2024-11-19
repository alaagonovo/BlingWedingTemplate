"use client";

import styles from "./Headerstyle.module.css";
import { Fade as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import links from "@/data/links";
import Aside from "../aside/Aside";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsHidden(true); // Scrolling down
    } else {
      setIsHidden(false); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Only update lastScrollY when needed

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
                <Link
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  href={`${link.path}`}
                >
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
