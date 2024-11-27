import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  const images = ["/gallery5.webp", "/gallery4.webp", "/gallery3.webp"];
  return (
    <footer className={styles.footer}>
      <div className={styles.main_grid_footer}>
        <div>
          <div className={styles.title}>
            <span data-aos="fade-up">Explore our latest work on</span>
            <h1 data-aos="fade-up">Instagram</h1>
          </div>
          <div className={styles.gallery}>
            <Image
              className={styles.mobile_Logo}
              src="/logo.png"
              alt="logo"
              loading="lazy"
              width={125}
              height={50}
            />
            <div className={styles.images_container}>
              {images.map((item, index) => (
                <Link
                  href="https://www.instagram.com/bling.weddings/"
                  key={index}
                >
                  <Image
                    src={item}
                    // width={80}
                    // height={100}
                    alt="insta Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <Image
            src="/logo.png"
            alt="logo"
            width={166}
            height={72}
            loading="lazy"
          />
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
              <Link href="/aboutus">About</Link>
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
