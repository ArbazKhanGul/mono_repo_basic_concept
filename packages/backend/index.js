const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
