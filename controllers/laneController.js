const Lanes = require("../models/lanes");
const asyncHandler = require("express-async-handler");

// Display list of all Lanes
exports.lane_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Lane list");
});
