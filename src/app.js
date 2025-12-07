const express = require("express");
const cors = require("cors");

const robotRoutes = require("./routes/robot.routes");
const logRoutes = require("./routes/log.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: " Robot API is running" });
});

app.use("/api/robots", robotRoutes);
app.use("/api/logs", logRoutes);

module.exports = app;
