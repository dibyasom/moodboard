const express = require("express");
var morgan = require("morgan");
var helmet = require("helmet");

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

// PORT
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Quote endpoint
app.get("/quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send({ quote: randomQuote });
});

// Start server
app.listen(port, () => {
  console.log(`Moodboard listening at port ${port}`);
});

// Export app
module.exports = app;
