import Link from "next/link";
import React from "react";
import styles from "/styles/pricing.module.css";

export default function pricing() {
  return (
    <main className={styles.main}>
      <Link className={styles.home} href="/">
        <span className="material-symbols-outlined">home</span>Home
      </Link>
      <section className={styles.card}>
        <div className={styles.upper}>
          <p className={`${styles.header} ${styles.u}`}>Residents</p>
        </div>
        <div className={styles.lower}>
          <p className={`${styles.label} ${styles.upp}`}>Upper</p>
          <p className={`${styles.label} ${styles.low}`}>Lower</p>
          <p className={`${styles.label} ${styles.ham}`}>Hamlet</p>
          <div className={styles.col}>
            <p className={styles["col-header"]}>Mon-Fri</p>
            <span className={styles.price}>$25.00</span>
            <span className={styles.price}>$25.00</span>
            <span className={styles.price}>$15.00</span>
          </div>
          <div className={styles.col}>
            <p className={styles["col-header"]}>Sat-Sun</p>
            <span className={styles.price}>$40.00</span>
            <span className={styles.price}>$40.00</span>
            <span className={styles.price}>$25.00</span>
          </div>
        </div>
      </section>
      <section className={styles.card}>
        <div className={styles.upper}>
          <p className={`${styles.header} ${styles.l}`}>Non-Profits</p>
        </div>
        <div className={styles.lower}>
          <p className={`${styles.label} ${styles.upp}`}>Upper</p>
          <p className={`${styles.label} ${styles.low}`}>Lower</p>
          <p className={`${styles.label} ${styles.ham}`}>Hamlet</p>
          <div className={styles.col}>
            <p className={styles["col-header"]}>Mon-Fri</p>
            <span className={styles.price}>$25.00</span>
            <span className={styles.price}>$25.00</span>
            <span className={styles.price}>$15.00</span>
          </div>
          <div className={styles.col}>
            <p className={styles["col-header"]}>Sat-Sun</p>
            <span className={styles.price}>$40.00</span>
            <span className={styles.price}>$40.00</span>
            <span className={styles.price}>$25.00</span>
          </div>
        </div>
      </section>
      <section className={styles.card}>
        <div className={styles.upper}>
          <p className={`${styles.header} ${styles.h}`}>Non-Residents</p>
        </div>
        <div className={`${styles.lower} ${styles.last}`}>
          <p className={`${styles.label} ${styles.upp}`}>Upper</p>
          <p className={`${styles.label} ${styles.low}`}>Lower</p>
          <p className={`${styles.label} ${styles.ham}`}>Hamlet</p>
          <div className={styles.col}>
            <p className={styles["col-header"]}>Mon-Fri</p>
            <span className={`${styles.price} ${styles.last}`}>$25.00</span>
            <span className={`${styles.price} ${styles.last} `}>$25.00</span>
            <span className={`${styles.price} ${styles.last}`}>$15.00</span>
          </div>
        </div>
      </section>
    </main>
  );
}
