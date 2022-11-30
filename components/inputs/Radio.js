import React from "react";
import styles from "/styles/register.module.css";

export default function Radio({ selected, choice, setChoice }) {
  function handleSelect(location) {
    if (choice[`${location}`]) return;
    setChoice(location);
  }

  return (
    <div className={styles["radio-wrapper"]}>
      <div>
        <div
          onClick={() => handleSelect("upper")}
          className={`${selected.upper ? styles.disabled : ""} ${
            styles.radio
          } ${choice === "upper" ? styles.checked : ""}`}
        ></div>
        <label>Upper</label>
      </div>
      <div>
        <div
          onClick={() => handleSelect("lower")}
          className={`${selected.lower ? styles.disabled : ""} ${
            styles.radio
          } ${choice === "lower" ? styles.checked : ""}`}
        ></div>
        <label>Lower</label>
      </div>
      <div>
        <div
          onClick={() => handleSelect("hamlet")}
          className={`${selected.hamlet ? styles.disabled : ""} ${
            styles.radio
          } ${choice === "hamlet" ? styles.checked : ""}`}
        ></div>
        <label>Hamlet</label>
      </div>
    </div>
  );
}
