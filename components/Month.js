import React from "react";
import Day from "./Day";
import styles from "/styles/calendar.module.css";

export default function Month({ month, regs, gap = 0 }) {
  function getStart() {
    let days = [];
    for (let i = 0; i < gap + month.gap; i++) {
      days.push("");
    }

    return days;
  }

  function returnDays() {
    let days = [];
    for (let i = 0; i < month.days; i++) {
      days.push({});
    }

    regs.forEach((r) => {
      if (r.approved && r.month === month.name)
        days[r.day][r.shelterRequested] = r;
    });

    return days;
  }

  return (
    <div className={styles["month-wrapper"]}>
      <p className={styles.name}>{month.name}</p>
      <div className={styles.month}>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        {getStart().map((s, index) => (
          <span key={index + "dbaui"}></span>
        ))}
        {returnDays().map((day, index) => {
          return (
            <Day key={index} month={month.name} day={day} date={index + 1} />
          );
        })}
      </div>
    </div>
  );
}
