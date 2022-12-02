import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/components/animated_input.module.css";

export default function AnimatedInput({ label, type, setVal, objKey }) {
  const [active, setActive] = useState(false);
  const inputRef = useRef();

  function checkActive(e) {
    if (e.target == inputRef.current || inputRef.current.value) setActive(true);
    else setActive(false);
  }

  useEffect(() => {
    window.addEventListener("click", checkActive);
    return () => window.removeEventListener("click", checkActive);
  }, []);

  return (
    <div
      className={`${styles["input-wrapper"]} ${active ? styles.active : ""}`}
    >
      <label>{label}</label>
      <input
        onChange={() => setVal(objKey, inputRef.current.value)}
        ref={inputRef}
        type={type}
      />
    </div>
  );
}
