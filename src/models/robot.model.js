const mongoose = require("mongoose");

const RobotSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, default: "offline" },
  battery: { type: Number, default: 100 },
  location: { type: String, default: null },
  mode: {
    type: String,
    enum: ["idle", "charging", "active", "error"],
    default: "idle",
  },
});

module.exports = mongoose.model("Robot", RobotSchema);
