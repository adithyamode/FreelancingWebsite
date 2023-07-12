import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";
import  express  from "express";
const stripe = new Stripe(
  // "sk_test_51NOawfSD53WzCeXR0FhmlL4XuEChnhCfY1II18NkNiryiQnyq4HE2TUn5TE4oAqE0cGOE9jBh334nKbwxwKaxCuL00Ibkr4wmf"
  //"sk_test_51NP4YdSAsQ3SS2RcdOwVU0Ri8u6iygz8ySGUnmgWeJY6EYEf9vAcO6sSEKVTpMsA97jFDAnZhskuREAKkzmBjKhT00wZ6jrVxp"
  // "sk_test_51NPJ0xSH7xDliB0Ai1bvTLbwNf4iCJEL9qRd8Wk8v6JKdggTWK8QdCNPM7EEGXXRkOgLsHpJWHNhgBpBKVRFwehB009eQm6tnY"
  //"sk_test_51NPLkWSIBQRwvMBJ14Jf46RbfO8nTT4ccE6cz9KtMhSy6x2p8JLNzAlcdAgtTG5oRu1XuhXJxulRPQPrJiQpKCfW00dP3lipOf"
  "sk_test_51NPMGWSBZKfEL1mSOGKV4Lk08ldz1ev90flrjwK1US9798y7A4AdpjpZfk2Bx5wlHzOnQF1oOVizjRDGpxzH0RiR00UFlIhBE5"
);
// const stripe = require('stripe')('sk_test_51NOawfSD53WzCeXR0FhmlL4XuEChnhCfY1II18NkNiryiQnyq4HE2TUn5TE4oAqE0cGOE9jBh334nKbwxwKaxCuL00Ibkr4wmf');

// To create a PaymentIntent for confirmation, see our guide at: https://stripe.com/docs/payments/payment-intents/creating-payment-intents#creating-for-automatic

export const addOrder = async (req, res, next) => {
  try {
    if (req.body.gigId) {
      const { gigId } = req.body;
      const prisma = new PrismaClient();
      const gig = await prisma.gigs.findUnique({
        where: { id: parseInt(gigId) },
      });
      // const paymentIntent = await stripe.paymentIntents.create({
      //   amount: gig?.price * 100,
      //   currency: "usd",
      //   description: 'Software development services',
      //   name: 'Jenny Rosen',
      // address: {
      //  line1: '510 Townsend St',
      //  postal_code: '98140',
      //  city: 'San Francisco',
      //  state: 'CA',
      //  country: 'US',
      //  },
        // automatic_payment_methods: {
        //   enabled: true,
        // },
        const paymentIntent = await stripe.paymentIntents.create({
          description: 'Software development services',
          shipping: {
            name: 'Jenny Rosen',
            address: {
              line1: '510 Townsend St',
              postal_code: '98140',
              city: 'San Francisco',
              state: 'CA',
              country: 'US',
            },
          },
          amount: 1099,
          currency: 'usd',
          payment_method_types: ['card'],
        
      });
      await prisma.orders.create({
        data: {
          paymentIntent: paymentIntent.id,
          price: gig?.price,
          buyer: { connect: { id: req?.userId } },
          gig: { connect: { id: parseInt(gigId) } },
        },
      });
     return res.status(201).json({
        clientSecret: paymentIntent.client_secret
      });
    } else {
      res.status(400).send("Gig id is required.");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

// const app = express();


// // This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret = "whsec_f9dde9dac5e6861636dd086a6b8d620326c9bfd3c1771b21e9d44b83c2f7d785";

// app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
//   const sig = request.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//   } catch (err) {
//     response.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }

//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded':
//       const paymentIntentSucceeded = event.data.object;
//       // Then define and call a function to handle the event payment_intent.succeeded
//       break;
//     // ... handle other event types
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   // Return a 200 response to acknowledge receipt of the event
//   response.send();
// });

// app.listen(4242, () => console.log('Running on port 4242'));



export const confirmOrder = async (req, res, next) => {
  try {
    if (req.body.paymentIntent) {
      const prisma = new PrismaClient();
      await prisma.orders.update({
        where: { paymentIntent: req.body.paymentIntent },
        data: { isCompleted: true },
      });
    }
 
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

export const getBuyerOrders = async (req, res, next) => {
  try {
    if (req.userId) {
      const prisma = new PrismaClient();
      const orders = await prisma.orders.findMany({
        where: { buyerId: req.userId, isCompleted: true },
        include: { gig: true },
      });
      return res.status(200).json({ orders });
    }
    return res.status(400).send("User id is required.");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

export const getSellerOrders = async (req, res, next) => {
  try {
    if (req.userId) {
      const prisma = new PrismaClient();
      const orders = await prisma.orders.findMany({
        where: {
          gig: {
            createdBy: {
              id: parseInt(req.userId),
            },
          },
          isCompleted: true,
        },
        include: {
          gig: true,
          buyer: true,
        },
      });
      return res.status(200).json({ orders });
    }
    return res.status(400).send("User id is required.");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
}