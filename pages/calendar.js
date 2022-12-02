import React from "react";
import Calendar from "../components/Calendar";
import axios from "axios";
import Link from "next/link";
import styles from "/styles/calendar.module.css";

export default function Cal({ months, regs }) {
  return (
    <main className={styles.main}>
      <Link className={styles.home} href="/">
        <span className="material-symbols-outlined">home</span>
        Home
      </Link>
      <Calendar months={months} regs={regs} />
    </main>
  );
}

export async function getServerSideProps(context) {
  try {
    let res = await axios.get(`${process.env.NEXT_PUBLIC_ROOT}/months.json`);
    let resII = await axios.get(
      `${process.env.NEXT_PUBLIC_ROOT}/api/registrations`
    );
    return {
      props: {
        months: res.data,
        regs: resII.data,
      },
    };
  } catch (err) {
    console.error(err.message);
    return {
      props: {
        months: [],
        regs: [],
      },
    };
  }
}
