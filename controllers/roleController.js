const Roles = require("../models/roles");
const Champions = require("../models/champions");
const asyncHandler = require("express-async-handler");

// Display list of all Roles
exports.role_assassins = asyncHandler(async (req, res, next) => {
  try {
    // Find the role with the name "Assassins"
    const assassinsRole = await Roles.findOne({ role: "Assassins" });
    if (!assassinsRole) {
      // If no "Assassins" found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Assassins" role.
    const assassinChampions = await Champions.find({ role: assassinsRole._id })
      .populate("role")
      .exec();

    res.render("role_assassins", {
      title: "League Assassins",
      role_assassins: assassinChampions,
    });
  } catch (error) {
    next(error);
  }
});

exports.role_fighters = asyncHandler(async (req, res, next) => {
  try {
    // Find the role with the name "Assassins"
    const fightersRole = await Roles.findOne({ role: "Fighters" });
    if (!fightersRole) {
      // If no "Fighters" found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Fighters" role.
    const fighterChampions = await Champions.find({ role: fightersRole._id })
      .populate("role")
      .exec();

    res.render("role_fighters", {
      title: "League Fighters",
      role_fighters: fighterChampions,
    });
  } catch (error) {
    next(error);
  }
});

exports.role_mages = asyncHandler(async (req, res, next) => {
  try {
    // Find the role with the name "Mages"
    const magesRole = await Roles.findOne({ role: "Mages" });
    if (!magesRole) {
      // If no "Mages" found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Mage" role.
    const mageChampions = await Champions.find({ role: magesRole._id })
      .populate("role")
      .exec();

    res.render("role_mages", {
      title: "League Mages",
      role_mages: mageChampions,
    });
  } catch (error) {
    next(error);
  }
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
