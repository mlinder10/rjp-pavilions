import styles from "/styles/register.module.css";
import axios from "axios";
import Link from "next/link";
import Form from "../components/Form";

export default function Register({ selected }) {
  return (
    <main className={styles.main}>
      <Link href="/calendar" className={styles.calendar}>
        <span className="material-symbols-outlined">calendar_month</span>
        Calendar
      </Link>
      <Form selected={selected} />
    </main>
  );
}

export async function getServerSideProps(context) {
  try {
    const { day, month } = context.query;
    let res = await axios.get(
      `${process.env.NEXT_PUBLIC_ROOT}/api/registrations`
    );

    const selected = [];

    res.data.forEach((r) => {
      if (r.month === month && r.day === day - 1 && r.approved)
        selected.push(r.shelterRequested);
    });

    return {
      props: {
        selected,
      },
    };
  } catch (err) {
    console.error(err.message);
  }
}
