const { Router } = require("express");
const router = Router();
const networksController = require("./controllers/networks.controller");

router.get("/networks", networksController.getAllNetworks);
router.get("/networks/:id", networksController.getNetwork);

module.exports = router;
