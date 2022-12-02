import Link from "next/link";
import React from "react";
import styles from "/styles/calendar.module.css";

export default function Day({ month, date, day }) {
  return (
    <Link
      href={`/register?month=${month}&day=${date}&wkd=${date % 7}`}
      className={styles.day}
    >
      <div className={styles["day-wrapper"]}>
        <span className={styles.date}>{date}</span>
        <div
          style={{
            backgroundColor: day.upper !== undefined ? "forestgreen" : "",
          }}
          className={styles.box}
        >
          .
        </div>
        <div
          style={{
            backgroundColor: day.lower !== undefined ? "saddlebrown" : "",
          }}
          className={styles.box}
        >
          .
        </div>
        <div
          style={{
            backgroundColor: day.hamlet !== undefined ? "goldenrod" : "",
          }}
          className={styles.box}
        >
          .
        </div>
      </div>
    </Link>
  );
}
