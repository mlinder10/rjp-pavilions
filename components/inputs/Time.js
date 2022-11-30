import React, { useEffect, useState } from "react";
import DropSelect from "./DropSelect";
import styles from "/styles/components/time.module.css";

const MINUTES_OPTIONS = ["00", "15", "30", "45"];
const HOURS_OPTIONS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

export default function Time({ setVal, objKey }) {
  const [time, setTime] = useState({ hours: "00", minutes: "00", half: "am" });

  function readTime() {
    return `${time.hours}:${time.minutes}${time.half}`;
  }

  function changeTime(timeKey, value) {
    let newTime = { ...time };
    newTime[timeKey] = value;
    setTime(newTime);
  }

  useEffect(() => {
    setVal(objKey, readTime());
  }, [time]);

  return (
    <div className={styles.wrapper}>
      <DropSelect
        setVal={changeTime}
        objKey="hours"
        val={time.hours}
        options={HOURS_OPTIONS}
      />
      :
      <DropSelect
        setVal={changeTime}
        objKey="minutes"
        val={time.minutes}
        options={MINUTES_OPTIONS}
      />
      <DropSelect
        setVal={changeTime}
        objKey="half"
        val={time.half}
        options={["am", "pm"]}
      />
    </div>
  );
}
