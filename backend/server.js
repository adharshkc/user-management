const express = require("express");
const bodyParser = require("body-parser")
require("dotenv").config();
const cors = require("cors");
require("./config/db");
const userRouter = require("./routes/user");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json())
app.use("/", userRouter);

app.listen(port, () => console.log(`server is listening on port ${port}`));
