const Lanes = require("../models/lanes");
const asyncHandler = require("express-async-handler");

// Display list of all Lanes
exports.lane_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Lane list");
});

exports.lane_top = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Top Lane");
});

exports.lane_jungle = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Jungle");
});

exports.lane_mid = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Mid Lane");
});

exports.lane_bot = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Bot Lane");
});

exports.lane_support = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Support");
});
