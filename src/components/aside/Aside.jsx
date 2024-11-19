
import { useEffect, useRef } from "react";
import styles from "./Aside.module.css";
import links from "@/data/links";
import PropTypes from "prop-types";
import Link from "next/link";

function Aside({ isOpen, setOpen }) {
  const asideRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const burgerIcon = document.querySelector(".hamburger-react"); // Hamburger icon selector
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target) &&
        burgerIcon &&
        !burgerIcon.contains(event.target) // Ensure hamburger clicks are ignored
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <aside className={styles.mainAside} ref={asideRef}>
      <div
        className={`${styles.aside_Container} ${
          isOpen ? styles.open : styles.close
        }`}
      >
        <ul className={styles.links_List}>
          {links.map((link, index) => (
            <li key={index} onClick={() => setOpen(false)}>
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
    </aside>
  );
}

Aside.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Aside;
