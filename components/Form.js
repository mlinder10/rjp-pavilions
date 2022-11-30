import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AnimatedInput from "./inputs/AnimatedInput";
import RadioSelect from "./inputs/RadioSelect";
import Time from "./inputs/Time";

const DAYS = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  0: "Saturday",
};

export default function Form({ selected }) {
  const router = useRouter();
  const { month, day, wkd } = router.query;
  const [form, setForm] = useState({ month, day, price: "Enter All Fields" });

  async function reserve() {
    try {
      let r = await axios.post("/api/registrations", form);
      const id = r.data.message;

      let res = await axios.post("/api/checkout", {
        name: form.location,
        unit_amount: parseFloat(form.price.slice(1)),
        reg: id,
        mon: month,
      });

      window.location.href = res.data.session.url;
    } catch (err) {
      console.error(err.message);
    }
  }

  function changeForm(type, value) {
    let newForm = { ...form };
    newForm[type] = value;
    setForm(newForm);
  }

  function calculatePrice() {
    if (form.location === undefined || form.residency === undefined) return;

    switch (form.location) {
      case "upper":
      case "lower":
        if (form.residency === "resident") {
          if (wkd !== 0 && wkd !== 1) changeForm("price", "$25.00");
          else changeForm("price", "$40.00");
        }
        if (form.residency === "non-resident") {
          changeForm("price", "$50.00");
        }
        if (form.residency === "non-profit") {
          if (wkd !== 0 && wkd !== 1) changeForm("price", "$20.00");
          else changeForm("price", "$25.00");
        }
        break;

      case "hamlet":
        if (form.residency === "resident") {
          if (wkd !== 0 && wkd !== 1) changeForm("price", "$15.00");
          else changeForm("price", "$25.00");
        }
        if (form.residency === "non-resident") {
          changeForm("price", "$35.00");
        }
        if (form.residency === "non-profit") {
          if (wkd !== 0 && wkd !== 1) changeForm("price", "$15.00");
          else changeForm("price", "$20.00");
        }
        break;
    }
  }

  useEffect(calculatePrice, [form.location, form.residency]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        margin: "32px",
      }}
    >
      <p>
        {DAYS[wkd]}, {month} {day}
      </p>
      <p>Price: {form.price}</p>
      <AnimatedInput
        label="Name"
        type="text"
        setVal={changeForm}
        objKey="name"
      />
      <AnimatedInput
        label="Address"
        type="text"
        setVal={changeForm}
        objKey="address"
      />
      <AnimatedInput
        label="Email"
        type="email"
        setVal={changeForm}
        objKey="email"
      />
      <AnimatedInput
        label="Phone"
        type="phone"
        setVal={changeForm}
        objKey="phone"
      />
      <AnimatedInput
        label="Party Size"
        type="number"
        setVal={changeForm}
        objKey="partySize"
      />
      <AnimatedInput
        label="Organization Name"
        type="text"
        setVal={changeForm}
        objKey="organizationName"
      />
      <div>
        <label>Arrival</label>
        <Time setVal={changeForm} objKey="arrivalTime" />
      </div>
      <div>
        <label>Departure</label>
        <Time setVal={changeForm} objKey="departureTime" />
      </div>
      <div>
        <label>Pavilion</label>
        <RadioSelect
          objKey="location"
          setVal={changeForm}
          options={["upper", "lower", "hamlet"]}
          disabled={selected}
        />
      </div>
      <div>
        <label>Fredonia Residency</label>
        <RadioSelect
          objKey="residency"
          setVal={changeForm}
          options={["resident", "non-resident", "non-profit"]}
          disabled={selected}
        />
      </div>
      <button onClick={reserve}>Reserve</button>
    </div>
  );
}
