const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// api routes
app.use(require("./routes/apiroutes.js"));

// html routes
app.use(require("./routes/htmlroutes.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

