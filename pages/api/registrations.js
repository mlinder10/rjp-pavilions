import db from "/utils/db";
import Registration from "/models/registration";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        let regs = await Registration.find();
        res.status(200).json(regs);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
      }
      break;
    case "POST":
      try {
        const {
          month,
          day,
          name,
          phone,
          partySize,
          departureTime,
          arrivalTime,
          address,
          email,
          organizationName,
          location,
        } = req.body;

        let reg = await Registration.create({
          approved: false,
          day: day - 1,
          month,
          shelterRequested: location,
          name,
          phone,
          partySize,
          departureTime,
          arrivalTime,
          address,
          email,
          organizationName,
        });

        res.status(200).json({ message: reg._id });
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
      }
      break;

    case "PATCH":
      try {
        const { reg } = req.body;
        await Registration.updateOne({ _id: reg }, { approved: true });
        res.status(200).json({ message: "success" });
      } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err.message);
      }
      break;

    case "DELETE":
      try {
        await Registration.remove();
        res.status(200).json({ message: "success" });
      } catch (err) {
        res.status(500).json(err.message);
        console.error(err.message);
      }
  }
}
