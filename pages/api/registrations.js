import Month from "/models/month";
import Registration from "/models/registration";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
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

        let m = await Month.findOne({ name: month });
        let reg = await Registration.create({
          dateRequested: day - 1,
          shelterRequested: location,
          name,
          phone,
          partySize,
          departureTime,
          arrivalTime,
          address,
          email,
          organizationName,
          approved: false,
        });

        let response = reg._id;
        m.registrations.push(reg);
        await m.save();
        res.status(200).json({ message: response });
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
      }
      break;

    case "PATCH":
      try {
        const { reg, mon } = req.body;

        let newReg = await Registration.findOne({ _id: reg });
        let newMon = await Month.findOne({ name: mon });
        newReg.approved = true;
        newMon.registrations.push(newReg);
        await newMon.save();

        res.status(200).json({ message: "success" });
      } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err.message);
      }
      break;
  }
}
