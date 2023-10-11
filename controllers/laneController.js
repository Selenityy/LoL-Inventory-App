const Lanes = require("../models/lanes");
const Champions = require("../models/champions");
const asyncHandler = require("express-async-handler");

// Display list of all Lanes
exports.lane_top = asyncHandler(async (req, res, next) => {
  try {
    // Find the lane with the name "Top"
    const topLane = await Lanes.findOne({ lane: "Top" });
    if (!topLane) {
      // If no "Top" lane found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Top" lane.
    const topChampions = await Champions.find({ lane: topLane._id })
      .populate("lane")
      .exec();

    res.render("lane_top", {
      title: "League Top Lane",
      lane_top: topChampions,
    });
  } catch (error) {
    next(error);
  }
});

exports.lane_jungle = asyncHandler(async (req, res, next) => {
  try {
    // Find the lane with the name "Jungle"
    const jungleLane = await Lanes.findOne({ lane: "Jungle" });
    if (!jungleLane) {
      // If no "Jungle" lane found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Jungle" lane.
    const jungleChampions = await Champions.find({ lane: jungleLane._id })
      .populate("lane")
      .exec();

    res.render("lane_jungle", {
      title: "League Jungle Lane",
      lane_jungle: jungleChampions,
    });
  } catch (error) {
    next(error);
  }
});

exports.lane_mid = asyncHandler(async (req, res, next) => {
  try {
    // Find the lane with the name "Mid"
    const midLane = await Lanes.findOne({ lane: "Mid" });
    if (!midLane) {
      // If no "Mid" lane found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Mid" lane.
    const midChampions = await Champions.find({ lane: midLane._id })
      .populate("lane")
      .exec();

    res.render("lane_mid", {
      title: "League Mid Lane",
      lane_mid: midChampions,
    });
  } catch (error) {
    next(error);
  }
});

exports.lane_bot = asyncHandler(async (req, res, next) => {
  try {
    // Find the lane with the name "Bot"
    const botLane = await Lanes.findOne({ lane: "Bot" });
    if (!botLane) {
      // If no "Mid" lane found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Bot" lane.
    const botChampions = await Champions.find({ lane: botLane._id })
      .populate("lane")
      .exec();

    res.render("lane_bot", {
      title: "League Bot Lane",
      lane_bot: botChampions,
    });
  } catch (error) {
    next(error);
  }
});

exports.lane_support = asyncHandler(async (req, res, next) => {
  try {
    // Find the lane with the name "Support"
    const supLane = await Lanes.findOne({ lane: "Support" });
    if (!supLane) {
      // If no "Support" lane found, redirect to catalog
      return res.redirect("/catalog");
    }

    // Find the champions with the "Support" lane.
    const supChampions = await Champions.find({ lane: supLane._id })
      .populate("lane")
      .exec();

    res.render("lane_support", {
      title: "League Support Lane",
      lane_support: supChampions,
    });
  } catch (error) {
    next(error);
  }
});
