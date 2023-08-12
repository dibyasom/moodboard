const express = require("express");
var morgan = require("morgan");
var helmet = require("helmet");
const mongoose = require("mongoose");

// Connect to mongoDB
const { MongoClient } = require("mongodb");

const app = express();

// Get quotes
const quotes = require("./data/quotes.json");

// Config
app.use(
  morgan(":status :method :url :res[content-length] - :response-time ms")
);

app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  })
);

// set the view engine to ejs
app.set("view engine", "ejs");

// Connect to mongoDB
// const uri = process.env.MONGODB_URI;
// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// PORT
const port = 3000;

// Pizza
const QuoteRequest = mongoose.model("Quote", {
  time: String,
  quote: String,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Quote endpoint
app.get("/quote", async (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  // const quoteRequest = new QuoteRequest({
  //   time: new Date(),
  //   quote: randomQuote,
  // });
  // await quoteRequest.save().then(() => {
  //   console.log("Quote saved");
  // });
  res.send({ quote: randomQuote });
});

app.get("/all-quotes", async (req, res) => {
  const allQuotes = await QuoteRequest.find({});
  res.send(allQuotes);
});

// Start server
app.listen(port, () => {
  console.log(`Moodboard listening at port ${port}`);
});

// Export app
module.exports = app;
