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
            backgroundColor: day.shelterRequested === "upper" ? "blue" : "",
          }}
          className={styles.box}
        />
        <div
          style={{
            backgroundColor: day.shelterRequested === "lower" ? "red" : "",
          }}
          className={styles.box}
        />
        <div
          style={{
            backgroundColor: day.shelterRequested === "hamlet" ? "green" : "",
          }}
          className={styles.box}
        />
      </div>
    </Link>
  );
}
