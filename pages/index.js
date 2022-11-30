import Link from "next/link";
import Image from "next/image";
import styles from "/styles/index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <p className={styles.watermark}>Russell Joy Park</p>
        <div className={styles.info}>
          <h1>Russell Joy Park</h1>
          <h2>105 Howard Street, Fredonia, NY</h2>
          <div className={styles.btns}>
            <Link className={styles.link} href="/calendar">
              Book a Pavilion
            </Link>
            <Link className={styles.linkII} href="/pricing">
              See Pricing
            </Link>
          </div>
          <Link className={styles.linkIII} href="/contact">
            Send Us A Message
          </Link>
        </div>
      </div>
      <div className={styles.img}></div>
    </main>
  );
}
