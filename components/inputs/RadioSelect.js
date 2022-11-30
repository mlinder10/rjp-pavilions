import React, { useState } from "react";
import styles from "/styles/components/radio.module.css";

export default function RadioSelect({
  setVal,
  objKey,
  options,
  disabled = [],
}) {
  const [selected, setSelected] = useState(null);

  function handleClick(o) {
    if (disabled.includes(o)) return;
    setSelected(o);
    setVal(objKey, o);
  }

  return (
    <div className={styles.wrapper}>
      {options.map((o) => (
        <div
          className={disabled.includes(o) ? styles.disabled : ""}
          key={o}
          onClick={() => handleClick(o)}
        >
          <div
            className={`${selected === o ? styles.selected : ""} ${styles.dot}`}
          ></div>
          <span style={{ pointerEvents: "none" }}>{o}</span>
        </div>
      ))}
    </div>
  );
}
