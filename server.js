const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT =  3001;
const cors = require("cors")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));69
// }
app.use(cors())
app.use(routes);

mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://ranjanraj1:Ranjanakku%40123@cluster0.byo8e9m.mongodb.net/movies",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, function () {
  console.log(`=> API Server now listening on PORT ${PORT}!`);
});
