const express = require("express");
const connectDb = require("./database/database")
require("dotenv").config()
const cors = require('cors')
const cookieParser = require("cookie-parser");
const Routes=require('./routes/routes');
const path = require('path');

const app = express();
connectDb();
app.use(express.json());
app.use(cookieParser());
console.log(process.env.FPORT)
app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests only from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));
Routes(app);
app.listen(process.env.BPORT, () => {
  console.log("Sever Started");
});
