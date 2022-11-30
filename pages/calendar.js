import React from "react";
import Calendar from "../components/Calendar";
import axios from "axios";
import Link from "next/link";
import styles from "/styles/calendar.module.css";

export default function Cal({ months }) {
  return (
    <main className={styles.main}>
      <Link
        style={{
          position: "absolute",
          top: "32px",
          left: "64px",
          fontWeight: "bold",
        }}
        href="/"
      >
        Home
      </Link>
      <Calendar months={months} />
    </main>
  );
}

export async function getServerSideProps(context) {
  let res = await axios.get(`http://localhost:3000/api/calendar`);
  return {
    props: {
      months: res.data,
    },
  };
}
