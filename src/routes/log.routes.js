const express = require("express");
const {
  createRobotLog,
  getRobotLogs,
} = require("../controllers/log.controller");

const router = express.Router();

router.post("/:id", createRobotLog);
router.get("/:id", getRobotLogs);

module.exports = router;
