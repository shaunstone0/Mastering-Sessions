const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/error");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
require("dotenv").config();
const connectDB = require("./database/createDatabase");

const routeHandler = require("./routes/index");

const PORT = process.env.PORT;

const app = express();

connectDB();

//disable header
app.disable("x-powered-by");

//import Express body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "session",
      ttl: parseInt(process.env.SESS_EXPIRE) / 1000,
    }),
    cookie: {
      samesite: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: parseInt(process.env.SESS_EXPIRE) * 60 * 60 * 2,
    },
  })
);

//Error Handler
app.use(errorHandler);

app.use("/api", routeHandler);

app.listen(PORT || 5000, () => console.log(`Server Started on ${PORT}`));
