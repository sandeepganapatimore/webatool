import express from "express";
import routes from "./routes";

class App {
  myLogger(req, res, next) {
    console.log("LOGGED");
    next();
  }
  app = express();
  constructor() {
    this.app.use(express.json());
    this.app.use(this.myLogger);
    this.app.use("/api", routes);
  }
}

export default new App().app;
