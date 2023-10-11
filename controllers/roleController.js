const Roles = require("../models/roles");
const asyncHandler = require("express-async-handler");

// Display list of all Roles
exports.role_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Role list");
});

exports.role_assassins = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Assassins");
});

exports.role_fighters = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Fighters");
});

exports.role_mages = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Mages");
});

exports.role_marksmen = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Marksmen");
});

exports.role_supports = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Supports");
});

exports.role_tanks = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Tanks");
});
