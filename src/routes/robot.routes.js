const express = require("express");
const {
  registerRobot,
  getAllRobots,
  getRobotById,
  updateRobotStatus,
} = require("../controllers/robot.controller");

const router = express.Router();

router.post("/register", registerRobot);
router.get("/", getAllRobots);
router.get("/:id", getRobotById);
router.put("/:id/status", updateRobotStatus);

module.exports = router;
