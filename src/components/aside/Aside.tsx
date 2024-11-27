import { useEffect, useRef } from "react";
import styles from "./Aside.module.css";
import links from "@/data/links";
import PropTypes from "prop-types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
interface LinkType {
  name: string;
  path: string;
  type: "internal" | "external";
}

interface AsideProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

function Aside({ isOpen, setOpen }: AsideProps) {
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const burgerIcon = document.querySelector(".hamburger-react");
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target as Node) &&
        burgerIcon &&
        !burgerIcon.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);
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
    setOpen(false);
  };

  return (
    <aside className={styles.mainAside} ref={asideRef}>
      <div
        className={`${styles.aside_Container} ${
          isOpen ? styles.open : styles.close
        }`}
      >
        <ul className={styles.links_List}>
          {links.map((link: LinkType, index: number) => (
            <li key={index} onClick={() => handleLinkClick(link)}>
              {link.type === "external" ? (
                <Link href={link.path} passHref>
                  {link.name}
                </Link>
              ) : (
                <a href={link.path} onClick={(e) => e.preventDefault()}>
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

Aside.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Aside;
