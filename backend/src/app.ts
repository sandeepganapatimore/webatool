import express from "express";
import routes from "./routes";
import cors from "cors";
import passport from "passport";
import { loginStrategy } from "./auth/AuthStrategy";

const myLogger = function (req, res, next) {
  console.log("req", req.headers);
  console.log("LOGGED");
  next();
};
class App {
  app = express();
  constructor() {
    this.app.use(express.json());
    this.app.use(cors());
    passport.use("signin", loginStrategy);
    this.app.use(myLogger);
    // remove the X-Powered-By HTTP header
    this.app.disable("x-powered-by");

    this.app.use(passport.initialize());

    this.app.use("/api", routes);
  }
}

export default new App().app;
