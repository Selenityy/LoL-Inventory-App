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
  try {
    // Find the role with the name "Marksmen"
    const marksmenRole = await Roles.findOne({ role: "Marksmen" });
    if (!marksmenRole) {
      // If no "Marksmen" found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Marksmen" role.
    const marksmenChampions = await Champions.find({ role: marksmenRole._id })
      .populate("role")
      .exec();

    res.render("role_marksmen", {
      title: "League Marksmen",
      role_marksmen: marksmenChampions,
    });
  } catch (error) {
    next(error);
  }
});

exports.role_supports = asyncHandler(async (req, res, next) => {
  try {
    // Find the role with the name "Supports"
    const supportsRole = await Roles.findOne({ role: "Supports" });
    if (!supportsRole) {
      // If no "Supports" found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Supports" role.
    const supportChampions = await Champions.find({ role: supportsRole._id })
      .populate("role")
      .exec();

    res.render("role_supports", {
      title: "League Supports",
      role_supports: supportChampions,
    });
  } catch (error) {
    next(error);
  }
});

exports.role_tanks = asyncHandler(async (req, res, next) => {
  try {
    // Find the role with the name "Tanks"
    const tanksRole = await Roles.findOne({ role: "Tanks" });
    if (!tanksRole) {
      // If no "Tanks" found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Supports" role.
    const tankChampions = await Champions.find({ role: tanksRole._id })
      .populate("role")
      .exec();

    res.render("role_tanks", {
      title: "League Supports",
      role_tanks: tankChampions,
    });
  } catch (error) {
    next(error);
  }
});
