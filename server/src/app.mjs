import express from "express";

import routes from "./routes.mjs";

const app = express();

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

// req and res should be json
app.use(express.json());

app.use(myLogger);

app.use("/api", routes);

export default app;
