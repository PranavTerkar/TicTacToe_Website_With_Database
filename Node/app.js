const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const AuthRouter = require("./routes/auth");
const cors = require("cors")

const mongoUrl = "mongodb+srv://pranav:<pranav>@cluster0.bja7pcp.mongodb.net/?retryWrites=true&w=majority";
const db = mongoose.connection;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((e) => console.log(e));

db.on("errer", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established");
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 8000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Home"));
// app.set('port', (5000));

app.use("/api", AuthRouter);
