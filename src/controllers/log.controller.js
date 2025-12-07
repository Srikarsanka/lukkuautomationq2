const Log = require("../models/log.model");
const Robot = require("../models/robot.model");

// Create log
exports.createRobotLog = async (req, res) => {
  const { message, level } = req.body;
  const robotId = req.params.id;

  const robotExists = await Robot.findOne({ id: robotId });
  if (!robotExists) return res.status(404).json({ error: "Robot not found" });

  const log = await Log.create({ robotId, message, level });
  res.status(201).json(log);
};

// Get logs for a robot
exports.getRobotLogs = async (req, res) => {
  const logs = await Log.find({ robotId: req.params.id });
  res.json(logs);
};
