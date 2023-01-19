import express from "express";

// create an instance of express.
const app = express();

// Declare constant port number
const port = 3000;

// app responds with “Hello World!” for requests to the root URL (/) or route.
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app starts a server and listens on port 3000 for connections.
app.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`);
});
