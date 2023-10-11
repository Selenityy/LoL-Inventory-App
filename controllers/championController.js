const Champions = require("../models/champions");
const Roles = require("../models/roles");
const Lanes = require("../models/lanes");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Home Page
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
  const [allRoles, allLanes] = await Promise.all([
    Roles.find().exec(),
    Lanes.find().exec(),
  ]);

  res.render("champion_form", {
    title: "Create a Champion",
    roles: allRoles,
    lanes: allLanes,
  });
});

// Handle Champion create on POST.
exports.champion_create_post = [
  // Convert the roles and lanes to arrays.
  (req, res, next) => {
    if (!(req.body.role instanceof Array)) {
      if (typeof req.body.role === "undefined") req.body.role = [];
      else req.body.role = new Array(req.body.role);
    } else if (!(req.body.lane instanceof Array)) {
      if (typeof req.body.lane === "undefined") req.body.lane = [];
      else req.body.lane = new Array(req.body.lane);
    }
    next();
  },

  // Validate and sanitize fields.
  body("name", "Name must not be empty").trim().isLength({ min: 1 }).escape(),
  body("description", "Description must not be empty").trim().isLength({min: 1}).escape(),
  body("roles.*").escape(),
  body("lanes.*").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const champion = new Champions({
      name: req.body.name,
      description: req.body.description,
      role: req.body.role,
      lane: req.body.lane,
    });

    if (!errors.isEmpty()) {
      const [allRoles, allLanes] = await Promise.all([
        Roles.find().exec(),
        Lanes.find().exec,
      ]);

      for (const role of allRoles) {
        if (champion.role.includes(role._id)) {
          role.checked = "true";
        }
      }
      for (const lane of allLanes) {
        if (champion.lane.includes(lane._id)) {
          lane.checked = "true";
        }
      }

      res.render("champion_form", {
        title: "Create Champion",
        roles: allRoles,
        lanes: allLanes,
        errors: errors.array(),
      });
    } else {
      await champion.save();
      res.redirect(champion.url);
    }
  }),
];

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
