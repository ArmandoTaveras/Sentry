import { CourierClient } from "@trycourier/courier";
import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
const app = express()

//htttp://69.140.76.213:8080/
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
      phone_number: "240-370-6534",
      email: "agprxme@gmail.com",
    },
    data: {
    } // optional variables for merging into templates
  })
  console.log("")
});
