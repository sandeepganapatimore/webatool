import express from "express";
import routes from "./routes";
import cors from "cors";
import passport from "passport";
import { signUpStrategy, loginStrategy } from "./auth/AuthStrategy";
class App {
  app = express();
  constructor() {
    this.app.use(express.json());
    this.app.use(cors());
    passport.use("signup", signUpStrategy);
    passport.use("signin", loginStrategy);

    // remove the X-Powered-By HTTP header
    this.app.disable("x-powered-by");

    this.app.use(passport.initialize());

    this.app.use("/api", routes);
  }
}

export default new App().app;
