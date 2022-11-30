import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/contact.module.css";

export default function Contact() {
  const [nameActive, setNameActive] = useState(false);
  const [addressActive, setAddressActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [phoneActive, setPhoneActive] = useState(false);
  const nameRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  function checkActives(e) {
    if (e.target == nameRef.current || nameRef.current.value)
      setNameActive(true);
    else setNameActive(false);
    if (e.target == addressRef.current || addressRef.current.value)
      setAddressActive(true);
    else setAddressActive(false);
    if (e.target == emailRef.current || emailRef.current.value)
      setEmailActive(true);
    else setEmailActive(false);
    if (e.target == phoneRef.current || phoneRef.current.value)
      setPhoneActive(true);
    else setPhoneActive(false);
  }

  useEffect(() => {
    window.addEventListener("click", checkActives);
    return () => window.removeEventListener("click", checkActives);
  });

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <p className={styles.watermark}>
          Send A <span>Message</span>
        </p>
        <h2 className={styles.head}>Contact</h2>
        <form>
          <div className={styles.row}>
            <div
              className={`${styles["input-wrapper"]} ${
                nameActive ? styles.active : ""
              }`}
            >
              <label>Name</label>
              <input ref={nameRef} type="text" />
            </div>
            <div
              className={`${styles["input-wrapper"]} ${
                addressActive ? styles.active : ""
              }`}
            >
              <label>Address</label>
              <input ref={addressRef} type="text" />
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={`${styles["input-wrapper"]} ${
                emailActive ? styles.active : ""
              }`}
            >
              <label>Email</label>
              <input ref={emailRef} type="email" />
            </div>
            <div
              className={`${styles["input-wrapper"]} ${
                phoneActive ? styles.active : ""
              }`}
            >
              <label>Phone</label>
              <input ref={phoneRef} type="tel" />
            </div>
          </div>
          <textarea placeholder="Message" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className={styles["img-wrapper"]}>
        {/* <img
          style={{ width: "100%", height: "100%" }}
          src="/contact_page.jpg"
          alt=""
        /> */}
      </div>
    </main>
  );
}
