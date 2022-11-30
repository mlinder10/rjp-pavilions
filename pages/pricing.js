import Link from "next/link";
import React from "react";
import styles from "/styles/pricing.module.css";

export default function pricing() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div className={styles.spacer}></div>
      <div className={styles.grid}>
        <div className={styles.col}>
          <div className={styles.spacer}></div>
          <div className={styles.spacer}></div>
          <div className={styles.spacer}></div>
          <span>Upper (Kiwanis)</span>
          <span>Lower (Rotary)</span>
          <span>Hamlet Street</span>
        </div>
        <div>
          <p>Residents</p>
          <div className={styles.spacer}></div>
          <div className={styles.gridII}>
            <div className={styles.col}>
              <span>Mon-Fri</span>
              <span>$25.00</span>
              <span>$25.00</span>
              <span>$15.00</span>
            </div>
            <div className={styles.col}>
              <span>Sat-Sun</span>
              <span>$40.00</span>
              <span>$40.00</span>
              <span>$25.00</span>
            </div>
          </div>
        </div>
        <div>
          <p>Non-Profits</p>
          <div className={styles.spacer}></div>
          <div className={styles.gridII}>
            <div className={styles.col}>
              <span>Mon-Fri</span>
              <span>$20.00</span>
              <span>$20.00</span>
              <span>$15.00</span>
            </div>
            <div className={styles.col}>
              <span>Sat-Sun</span>
              <span>$25.00</span>
              <span>$25.00</span>
              <span>$20.00</span>
            </div>
          </div>
        </div>
        <div>
          <p>Non-Residents</p>
          <div className={styles.spacer}></div>
          <div className={styles.col}>
            <div className={styles.spacer}></div>
            <span>$50.00</span>
            <span>$50.00</span>
            <span>$35.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
