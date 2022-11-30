import axios from "axios";
import React from "react";

export default function Checkout({ message }) {
  return (
    <div>
      <>Thank You for your purchase</>
      <>{message}</>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const { reg, mon } = context.query;
    let res = await axios.patch(`http://localhost:3000/api/registrations`, {
      reg,
      mon,
    });
    return {
      props: {
        message: "Success",
      },
    };
  } catch (err) {
    console.error(err.message);
    return {
      props: {
        message: "Error",
      },
    };
  }
}
