import app from "./src/app";

const port = 8000;

app.get("/api", (req, res) => {
  res.send("App is running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
