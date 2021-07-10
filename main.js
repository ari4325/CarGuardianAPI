import connectDB from "./connection.js";
import express from "express";
import sign from "./routes/signup.js";
import login from "./routes/login.js";
import userInfo from "./routes/userinfo.js";
import loadMessage from "./routes/loadMessages.js";
import message from "./routes/message.js";

const app = express();
var port = process.env.PORT || 8080;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/register", sign);
app.get("/login", login);
app.get("/userinfo", userInfo);
app.post("/message", message);
app.get("/loadmessage", loadMessage);

app.listen(port, (error) => {
  if (error == null) {
    console.log("Legion");
  }
});


