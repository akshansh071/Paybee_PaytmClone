// backend/index.js
const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("App is listening at port 3000");
});
//all request coming to this api/v1 go to mainRouter => at routes/index bcz there we can handle our
//api call and structure them like api/v1/user  or api/v1/transaction
