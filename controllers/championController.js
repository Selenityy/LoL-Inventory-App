const Champions = require("../models/champions");
const Roles = require("../models/roles");
const Lanes = require("../models/lanes");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Get details of the champions, roles and lanes
  const [
    numChampions,
    numAssassinRoles,
    numFighterRoles,
    numMageRoles,
    numMarksmenRoles,
    numSupportRoles,
    numTankRoles,
    numTopLanes,
    numJungleLanes,
    numMidLanes,
    numBotLanes,
    numSupportLanes,
  ] = await Promise.all([
    Champions.countDocuments({}).exec(),
    Roles.countDocuments({ role: "Assassins" }).exec(),
    Roles.countDocuments({ role: "Fighters" }).exec(),
    Roles.countDocuments({ role: "Mages" }).exec(),
    Roles.countDocuments({ role: "Marksmen" }).exec(),
    Roles.countDocuments({ role: "Supports" }).exec(),
    Roles.countDocuments({ role: "Tanks" }).exec(),
    Lanes.countDocuments({ lane: "Top" }).exec(),
    Lanes.countDocuments({ lane: "Jungle" }).exec(),
    Lanes.countDocuments({ lane: "Mid" }).exec(),
    Lanes.countDocuments({ lane: "Bot" }).exec(),
    Lanes.countDocuments({ lane: "Support" }).exec(),
  ]);

  res.render("index", {
    title: "League of Legends Champion Inventory",
    champion_count: numChampions,
    assassin_count: numAssassinRoles,
    fighter_count: numFighterRoles,
    mage_count: numMageRoles,
    marksmen_count: numMarksmenRoles,
    support_count: numSupportRoles,
    tank_count: numTankRoles,
    top_lane_count: numTopLanes,
    jungle_lane_count: numJungleLanes,
    mid_lane_count: numMidLanes,
    bot_lane_count: numBotLanes,
    sup_lane_count: numSupportLanes,
  });
});

// Display list of all Champions.
exports.champion_list = asyncHandler(async (req, res, next) => {
  const allChampions = await Champions.find({}, "name description role lane")
    .sort({ name: 1 })
    .populate("description")
    .populate("role")
    .populate("lane")
    .exec();

  res.render("champion_list", {
    title: "League Champion List",
    champion_list: allChampions,
  });
});

// Display detail page for a specific Champion.
exports.champion_detail = asyncHandler(async (req, res, next) => {
  const championDetail = await Champions.findById(req.params.id)
    .populate("description")
    .populate("role")
    .populate("lane")
    .exec();

  if (championDetail === null) {
    const err = new Error("Champion not found");
    err.status = 404;
    return next(err);
  }

  res.render("champion_detail", {
    title: "Champion Detail",
    champion_detail: championDetail,
  });
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
