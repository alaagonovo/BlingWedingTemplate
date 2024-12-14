"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./Headerstyle.module.css";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import links from "@/data/links";
import { usePathname, useRouter } from "next/navigation";
import Aside from "../aside/Aside";

interface LinkType {
  name: string;
  path: string;
  type: "internal" | "external";
}

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Memoize handleScroll to avoid unnecessary re-renders
  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      if (!isHidden) setIsHidden(true);
    } else {
      if (isHidden) setIsHidden(false);
    }
    if (scrollY !== lastScrollY) setLastScrollY(scrollY);
  }, [lastScrollY, isHidden]); // Only recreate handleScroll when lastScrollY changes

  useEffect(() => {
    setLastScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // Only re-run useEffect when handleScroll changes

  const path = usePathname();
  const router = useRouter();

  const handleLinkClick = (link: LinkType) => {
    if (link.type === "internal") {
      const target = document.querySelector(link.path);
      if (path !== "/") {
        router.push(`/${link.path}`);
      }
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  console.log("Header", isHidden);
  return (
    <header
      className={`${styles.header_Container} ${
        isHidden ? styles.scroll_hidden : ""
      }`}
    >
      <div className={styles.location}>
        <p>
          <span>
            <Image
              src="/svgs/location.svg"
              alt="location"
              width={10}
              height={10}
              loading="eager"
            />
          </span>
          Servicing social magic across the world | Destination Weddings
          Available
        </p>
      </div>
      <nav>
        <div className={styles.burgerIcon}>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image
              src="/logo.webp"
              alt="logo"
              width={160}
              height={71}
              loading="eager"
            />
          </div>
        </Link>
        <div className={styles.links_Container}>
          <ul className={styles.links_List}>
            {links.map((link, index) => (
              <li key={index}>
                {link.type === "external" ? (
                  <Link href={link.path} passHref>
                    {link.name}
                  </Link>
                ) : (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link);
                    }}
                    href={link.path}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* {isOpen && <Aside isOpen={isOpen} setOpen={setOpen} />} */}
        <Aside isOpen={isOpen} setOpen={setOpen} />
      </nav>
    </header>
  );
};

export default Header;
