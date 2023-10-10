const express = require("express");
const router = express.Router();

// Require controller modules.
const champion_controller = require("../controllers/championController");
const role_controller = require("../controllers/roleController");
const lane_controller = require("../controllers/laneController");

/// CHAMPIONS ROUTES ///

// GET catalog home page.
router.get("/", champion_controller.index);

// GET request for list of all Champions.
router.get("/champions", champion_controller.champion_list);

// GET request for one Champion.
router.get("/champions/:id", champion_controller.champion_detail);

// GET request for creating a Champion. NOTE This must come before routes that display Champions (uses id).
router.get("/champions/create", champion_controller.champion_create_get);

// POST request for creating Champion
router.post("/champions/create", champion_controller.champion_create_post);

// GET request to delete Champion.
router.get("/champions/:id/delete", champion_controller.champion_delete_get);

// POST request to delete Champion.
router.post("/champions/:id/delete", champion_controller.champion_delete_post);

// GET request to update Champion.
router.get("/champions/:id/update", champion_controller.champion_update_get);

// POST request to update Champion.
router.post("/champions/:id/update", champion_controller.champion_update_post);

/// ROLE ROUTES ///

// GET request for list of all roles.
router.get("/roles", role_controller.role_list);

/// LANE ROUTES ///

// GET request for list of all lanes.
router.get("/lanes", lane_controller.lane_list);

module.exports = router;
