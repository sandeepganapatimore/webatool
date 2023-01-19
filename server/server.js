import express from "express";

// create an instance of express.
const app = express();

const port = 3000;

// app responds with “Hello World!” for requests to the root URL (/) or route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// app starts a server and listens on port 3000 for connections.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
