import { startSock } from "./src/services/server-bot";
import express from "express";

require("dotenv");
startSock();

const app = express();
const { PORT } = process.env;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
