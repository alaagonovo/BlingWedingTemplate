"use client";

import { useState, useEffect } from "react";
import styles from "./Headerstyle.module.css";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import Aside from "../aside/Aside";
import links from "@/data/links";
import { usePathname, useRouter } from "next/navigation";

interface LinkType {
  name: string;
  path: string;
  type: "internal" | "external";
}

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    setLastScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, handleScroll]);
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
              width={8}
              height={8}
              loading="lazy"
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
            <Image src="/logo.png" alt="logo" width={160} height={71} />
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
        <Aside isOpen={isOpen} setOpen={setOpen} />
      </nav>
    </header>
  );
};

export default Header;

// export default Header;
