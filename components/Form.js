import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AnimatedInput from "./inputs/AnimatedInput";
import RadioSelect from "./inputs/RadioSelect";
import Time from "./inputs/Time";
import styles from "/styles/register.module.css";

const DAYS = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  0: "Saturday",
};

const NAMES = {
  upper: "Upper Pavilion",
  lower: "Lower Pavilion",
  hamlet: "Hamlet Street Pavilion",
};

export default function Form({ selected }) {
  const router = useRouter();
  const { month, day, wkd } = router.query;
  const [form, setForm] = useState({ month, day, price: "Enter All Fields" });

  async function reserve() {
    if (!checkFields()) return window.alert("Please Enter All Fields");

    try {
      let r = await axios.post("/api/registrations", form);
      const id = r.data.message;

      let res = await axios.post("/api/checkout", {
        name: NAMES[form.location],
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

  function checkFields() {
    if (
      form.name === undefined ||
      form.address === undefined ||
      form.email === undefined ||
      form.phone === undefined ||
      form.partySize === undefined ||
      form.organizationName === undefined ||
      form.location === undefined ||
      form.residency === undefined ||
      form.arrivalTime === "00:00am" ||
      form.departureTime === "00:00am"
    )
      return false;
    return true;
  }

  useEffect(calculatePrice, [form.location, form.residency]);

  return (
    <div className={styles.form}>
      <div className={styles.info}>
        <span>
          {DAYS[wkd]}, {month} {day}
        </span>
        <p>
          <span>Price:</span> {form.price}
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.text}>
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
        </div>
        <div className={styles.right}>
          <div className={styles.radio}>
            <div>
              <label className={styles["radio-label"]}>Pavilion</label>
              <RadioSelect
                objKey="location"
                setVal={changeForm}
                options={["upper", "lower", "hamlet"]}
                disabled={selected}
              />
            </div>
            <div>
              <label className={styles["radio-label"]}>
                Fredonia Residency
              </label>
              <RadioSelect
                objKey="residency"
                setVal={changeForm}
                options={["resident", "non-resident", "non-profit"]}
                disabled={selected}
              />
            </div>
          </div>
          <div></div>
          <div className={styles.time}>
            <div>
              <label className={styles["time-label"]}>Arrival</label>
              <Time setVal={changeForm} objKey="arrivalTime" />
            </div>
            <div>
              <label className={styles["time-label"]}>Departure</label>
              <Time setVal={changeForm} objKey="departureTime" />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btn} onClick={reserve}>
        Reserve
      </button>
    </div>
  );
}
