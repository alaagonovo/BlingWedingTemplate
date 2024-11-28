import Link from "next/link";
import React from "react";
import styles from "./homeTitle.module.css";
function HomeTitle() {
  return (
    <div className={styles.title_Container}>
      <h1>
        ready to grow?
        <Link href="/#contactus">LET&apos;S CONNECT!</Link>
      </h1>
    </div>
  );
}

export default HomeTitle;
