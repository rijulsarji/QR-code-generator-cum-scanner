const express = require("express");
const mongoose = require("mongoose");

const app = express(); 
app.use(express.json())

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to ${port}...`)
})

// connecting to database
const dbURi = process.env.dbURi;

mongoose
  .connect(dbURi)
  .then(() => {
    console.log("Connected to database...")
  })
  .catch(err => console.log(err))

app.get("/", (req, res) => {
// send data to mongo
})