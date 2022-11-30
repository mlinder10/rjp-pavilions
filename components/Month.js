import React from "react";
import Day from "./Day";
import styles from "/styles/calendar.module.css";

export default function Month({ month, gap = 0 }) {
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

    month.registrations.forEach((r) => {
      if (r.approved) days[r.dateRequested] = r;
      console.log(r);
    });

    return days;
  }

  return (
    <div className={styles["month-wrapper"]}>
      <p className={styles.name}>{month.name}</p>
      <div className={styles.month}>
        <span>Sunday</span>
        <span>Monday</span>
        <span>Tuesday</span>
        <span>Wednesday</span>
        <span>Thursday</span>
        <span>Friday</span>
        <span>Saturday</span>
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
