import styles from "/styles/register.module.css";
import axios from "axios";
import Link from "next/link";
import Form from "../components/Form";

export default function Register({ selected }) {
  return (
    <div>
      <Link href="/calendar">Calendar</Link>
      <Form selected={selected} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const { day, month } = context.query;
    let dbMonth;
    let res = await axios.get(`http://localhost:3000/api/calendar`);

    res.data.forEach((m) => {
      if (m.name === month) dbMonth = m;
    });

    const selected = [];

    dbMonth.registrations.forEach((r) => {
      if (r.dateRequested + 1 == day && r.approved) {
        selected.push(r.shelterRequested);
      }
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
