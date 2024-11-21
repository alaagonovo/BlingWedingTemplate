import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main_grid_footer}>
        <div>
          <div className={styles.title}>
            <span data-aos="fade-up">Explore our latest work on</span>
            <h1 data-aos="fade-up">Instagram</h1>
          </div>
          <div className={styles.gallery}>
            <img className={styles.mobile_Logo} src="/logo.png" alt="logo" />
            <Link href="https://www.instagram.com/she__socials/">
              <img src="/social.jpg" alt="social" />
            </Link>
          </div>
        </div>
        <div className={styles.middle}>
          <img src="/logo.png" alt="logo" />
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <span className={styles.copyright}>
              © 2024 BLING.
              <br /> Proudly Designed by{" "}
              <Link className="font-semibold" href="https://www.gonovo.tech/">
                GONOVO
              </Link>
            </span>
            <div className={styles.terms_polices_container}>
              <Link href="/" className={styles.terms_Polices}>
                Terms & Conditions
              </Link>
              <span style={{ margin: "0 2px" }}> | </span>
              <Link href="/" className={styles.terms_Polices}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.dis_menu_Mobile}>
          <div className={styles.title}>
            <span data-aos="fade-up">Quick</span>
            <h1 data-aos="fade-up">Menu</h1>
          </div>
          <ul data-aos="fade-up">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">How to Work</Link>
            </li>
            <li>
              <Link href="/">Copouns</Link>
            </li>
            <li>
              <Link href="/">Our Work</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
