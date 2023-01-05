import Link from "next/link";
import { useEffect } from "react";
import styles from "/styles/index.module.css";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    async function open() {
      try {
        axios.get(`${process.env.NEXT_PUBLIC_ROOT}/api/registrations`);
      } catch (err) {
        console.error(err.message);
      }
    }
    open();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <p className={styles.watermark}>Russell Joy Park</p>
        <div className={styles.info}>
          <div>
            <h1>Russell Joy Park</h1>
            <h2>105 Howard Street, Fredonia, NY</h2>
          </div>
          <div className={styles.btns}>
            <Link className={styles.link} href="/calendar">
              Book a Pavilion
            </Link>
            <Link className={styles.linkII} href="/pricing">
              See Pricing
            </Link>
          </div>
          <a
            className={styles.linkIII}
            href="https://www.villageoffredoniany.com/contact-us.html"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined">send</span>
            <p>Send Us A Message</p>
          </a>
        </div>
      </div>
      <div className={styles.img}></div>
    </main>
  );
}
