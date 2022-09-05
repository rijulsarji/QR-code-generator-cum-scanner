const express = require("express");
const mongoose = require("mongoose");

const app = express(); 
app.use(express.json())

const dbUri = process.env.PORT
console.log(dbUri)