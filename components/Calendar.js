import React from "react";
import Month from "./Month";
import styles from "/styles/calendar.module.css";

const GAP = 0;

export default function Calendar({ months, regs }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upper}>
        <p>Key</p>
        <div>
          <span
            style={{ backgroundColor: "blue" }}
            className={styles.box}
          ></span>
          <label>Upper</label>
        </div>
        <div>
          <span
            style={{ backgroundColor: "red" }}
            className={styles.box}
          ></span>
          <label>Lower</label>
        </div>
        <div>
          <span
            style={{ backgroundColor: "green" }}
            className={styles.box}
          ></span>
          <label>Hamlet</label>
        </div>
      </div>
      {months.map((month) => (
        <Month gap={GAP} key={month.name} month={month} regs={regs} />
      ))}
    </div>
  );
}
