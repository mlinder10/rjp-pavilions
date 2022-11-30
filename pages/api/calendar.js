import db from "/utils/db";
import Month from "/models/month";
import Registrations from "/models/registration";
import monthsJSON from "./months.json";

async function createMonths() {
  let months = [];
  monthsJSON.forEach(async (month) => {
    let m = await Month.create({
      name: month.name,
      days: month.days,
      gap: month.gap,
    });
    months.push(m);
  });
  return months;
}

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        let months = await Month.find({});
        res.json(months);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
      }
      break;

    case "POST":
      try {
        let months = await createMonths();
        res.json(months);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
      }
      break;

    case "DELETE":
      try {
        let r = await Month.deleteMany({});
        res.json(r);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
      }
  }
}
