const express = require("express");
const bodyParser = require("body-parser")
require("dotenv").config();
const cors = require("cors");
require("./config/db");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const {errorHandler} = require("./middlewares/errorHandling");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json())
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter)
app.use(errorHandler)

app.listen(port, () => console.log(`server is listening on port ${port}`));
