const Roles = require("../models/roles");
const asyncHandler = require("express-async-handler");

// Display list of all Roles
exports.role_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Role list");
});
