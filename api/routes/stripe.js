import express from 'express';
import stripe from stripe(process.env.STRIPE_SECRET_KEY);

const stripeRouter = express.Router();

stripeRouter.route("/payment").post(async (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeError, stripeRes) => {
        if (stripeError) {
            return res.status(500).send(stripeError);
        } else {
            return res.status(200).send(stripeRes);
        }
    }
    )
})