import express from "express";

import routes from "./routes.mjs";

const app = express();

// req and res should be json
app.use(express.json());

app.use("/api", routes);

export default app;
