const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MDP3mSIUirw0btR3f5p0QKN3xaU0Qm2EigQMlKYfp2AhFQsE7eFfhfZAllP9bm0vVO8iPvy7SeVD7gSbAM0MbZi00b2LULekp');

//API

//- App config
const app = express();
//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//-API routes
app.get('/', (request, response) => response.status(200).send('HEllo World'));
/* app.get('/sahil', (request, response) => response.status(200).send('HEllo sahil')) */

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    //OK -Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//- Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
//http://127.0.0.1:5001/clone-44c9a/us-central1/api

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });






