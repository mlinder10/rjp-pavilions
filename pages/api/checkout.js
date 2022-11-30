const stripe = require("stripe")(
  "sk_test_51M9bLgEkbD2Tq5Z25WSa1iZhSbWSB5XTng7ACdNNkGuK4FmW0c9cf2w8d7jRRgdutetdvwv5mNog8D0c5pRtiRJj00Xwt39vuk"
);

export default async function handler(req, res) {
  const { name, unit_amount } = req.body;

  const item = {
    price_data: {
      currency: "usd",
      product_data: {
        name,
        images: [
          "https://fastly.4sqi.net/img/general/600x600/WBumD0L80QmtM9mkrYBungiWkPSa7-bJpmgAwuU7T44.jpg",
        ],
      },
      unit_amount: unit_amount * 100,
    },
    quantity: 1,
  };

  const session = await stripe.checkout.sessions.create({
    line_items: [item],
    mode: "payment",
    success_url: `http://localhost:3000/checkout?reg=${req.body.reg}&mon=${req.body.mon}`,
    cancel_url: "http://localhost:3000/calendar",
  });

  res.status(200).json({ session });
}
