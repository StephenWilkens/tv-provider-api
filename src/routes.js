const { Router } = require("express");
const router = Router();
const networksController = require("./controllers/networks.controller");

router.get("/networks", networksController.getAllNetworks);
router.get("/networks/:id", networksController.getNetwork);
router.post("/networks", networksController.createNetwork);
router.put("/networks/:id", networksController.updateNetwork);
router.delete("/networks/:id", networksController.deleteNetwork);

module.exports = router;
