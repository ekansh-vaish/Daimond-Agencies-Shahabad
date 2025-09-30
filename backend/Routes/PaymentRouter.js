const express = require("express");
const router = express.Router();
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: process.env.Client_Id,
  client_secret: process.env.Payment_Key,
});

router.post("/payment", async (req, res) => {
  try {
    const create_payment_json = {
      intent: "sale",
      payer: { payment_method: "paypal" },
      redirect_urls: {
        return_url: "http://localhost:8080/success",
        cancel_url: "http://localhost:8080/cancel",
      },
      transactions: [{
        item_list: {
          items: [{
            name: "item",
            sku: "item",
            price: "10.00",
            currency: "USD",
            quantity: 1,
          }],
        },
        amount: { total: "10.00", currency: "USD" },
        description: "This is the payment description.",
      }],
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) throw error;
      res.json(payment);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Payment creation failed" });
  }
});

router.get("/success", (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [{
      amount: { currency: "USD", total: "10.00" },
      description: "This is the payment description.",
    }],
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response);
      return res.redirect("http://localhost:8080/failed");
    } else {
      console.log(payment);
      return res.redirect("http://localhost:8080/success");
    }
  });
});

module.exports = router;
