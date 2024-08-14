// router.js
const express = require("express");
const router = express.Router();

const getAndUpdateLeaderboard = require("../controllers/getAndUpdateLeaderboardController.js");
const initController = require("../controllers/initController.js");

// Initiale Datenroute
router.get("/", (req, res) => {
  initController(req, res);
});

// Route für Leaderboard-Updates
router.post("/getAndUpdateLeaderboard", async (req, res) => {
  getAndUpdateLeaderboard(req, res);
});

module.exports = router;
