import nodemailer from "nodemailer";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const { pavilion, date, email } = req.body;
        let p;
        switch (pavilion) {
          case "upper":
            p = "Upper Pavilion";
            break;
          case "lower":
            p = "Lower Pavilion";
            break;
          case "hamlet":
            p = "Hamlet Pavilion";
            break;
        }

        let messageBody = `Your reservation for Russell Joy ${p} on ${date} has been requested and is currently pending approval. An email will be sent upon approval notifying you of confirmation.`;

        // let date = new Date();
        // let hours =
        //   date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        // let minutes =
        //   date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        // let am_pm = date.getHours() > 12 ? "pm" : "am";
        // let messageBody = `Sender Email: ${req.body.email}\n`;
        // messageBody += `Sender Name: ${req.body.name}\n`;
        // messageBody += `Time Sent: ${hours}:${minutes}${am_pm}\n`;
        // messageBody += `\n\n${req.body.message}`;

        var transporter = nodemailer.createTransport({
          service: process.env.PROXY_PROVIDER,
          auth: {
            user: process.env.PROXY_EMAIL,
            pass: process.env.PROXY_PASS,
          },
        });

        var mailOptions = {
          from: process.env.PROXY_EMAIL,
          to: email,
          subject: "No Reply",
          text: messageBody,
        };

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) return res.status(500).json({ message: err.message });
          return res
            .status(201)
            .json({ message: "Message sent successfully!" });
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
      break;
    default:
      res.status(404).json({ message: `${req.method} does not exist` });
  }
}
