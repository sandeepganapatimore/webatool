import app from "./src/app.mjs";

const port = 3000;

// app starts a server and listens on port 3000 for connections.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
