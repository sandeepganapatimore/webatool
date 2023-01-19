import express from "express";
import { ScanModel } from "./db.js";
// create an instance of express.
const app = express();

const port = 3000;

// req and res should be json
app.use(express.json());

// app responds with fecth all records from scans table for requests to the root URL (/) or route
app.get("/", async (req, res) => {
  const result = await ScanModel.findAll();
  res.send(result);
});

app.get("/:id", async (req, res) => {
  console.log(req.params);
  const result = await ScanModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.send(result);
});

// create a resource
app.post("/", async (req, res) => {
  const result = await ScanModel.create({ url: req?.body?.url });
  res.status(201).send(result);
});

app.put("/:id", async (req, res) => {
  const result = await ScanModel.update(
    { url: req?.body?.url },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  const result = await ScanModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.sendStatus(204);
});

// app starts a server and listens on port 3000 for connections.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
