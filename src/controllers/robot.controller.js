const Robot = require("../models/robot.model");

// Register a robot
exports.registerRobot = async (req, res) => {
  try {
    const robot = await Robot.create(req.body);
    res.status(201).json(robot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all robots
exports.getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json(robots);
};

// Get robot by ID
exports.getRobotById = async (req, res) => {
  const robot = await Robot.findOne({ id: req.params.id });
  if (!robot) return res.status(404).json({ error: "Robot not found" });
  res.json(robot);
};

// Update robot status
exports.updateRobotStatus = async (req, res) => {
  const robot = await Robot.findOneAndUpdate({ id: req.params.id }, req.body, {
    new: true,
  });
  if (!robot) return res.status(404).json({ error: "Robot not found" });
  res.json(robot);
};
