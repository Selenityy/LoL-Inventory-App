const Champions = require("../models/champions");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});

// Display list of all Champions.
exports.champion_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Champion list");
});

// Display detail page for a specific Champion.
exports.champion_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Champion detail: ${req.params.id}`);
});

// Display Champion create form on GET.
exports.champion_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Champion create GET");
});

// Handle Champion create on POST.
exports.champion_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Champion create POST");
});

// Display Champion delete form on GET.
exports.champion_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Champion delete GET");
});

// Handle Champion delete on POST.
exports.champion_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Champion delete POST");
});

// Display Champion update form on GET.
exports.champion_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Champion update GET");
});

// Handle Champion update on POST.
exports.champion_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Champion update POST");
});
