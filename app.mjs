import { CourierClient } from "@trycourier/courier";
import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const server = app.listen(8080, () => {
  console.log("server is running")
})

const courier = CourierClient({
  authorizationToken: dotenv.COURIER_AUTH_TOKEN
}); // get from the Courier UI


app.get('/sendText', () => {
  courier.send({
    eventId: "Danger", // get from the Courier UI
    recipientId: "Armando", // usually your system's User ID
    profile: {
      phone_number: dotenv.PHONE_NUMBER,
      email: dotenv.EMAIL,
    },
    data: {
    } // optional variables for merging into templates
  })
  console.log("")
});
