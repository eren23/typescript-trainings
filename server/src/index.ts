import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asdasasdk"] }));
app.use(router);

app.listen(3000, () => {
  console.log("PORT 3000 IS OPEN");
});
