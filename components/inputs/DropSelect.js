import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/components/drop.module.css";

export default function DropSelect({ val, options, setVal, objKey }) {
  const [active, setActive] = useState(false);
  const selectRef = useRef();

  function handleClick(e) {
    if (e.target == selectRef.current && !active) setActive(true);
    else setActive(false);
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={styles.wrapper}>
      <span ref={selectRef}>{val}</span>
      <div className={`${styles.drop} ${active ? styles.active : ""}`}>
        {options.map((o) => (
          <span key={o} onClick={() => setVal(objKey, o)}>
            {o}
          </span>
        ))}
      </div>
    </div>
  );
}
