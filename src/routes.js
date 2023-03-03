const { Router } = require("express");
const router = Router();
const networksController = require("./controllers/networks.controller");
const packagesController = require("./controllers/provider_packages.controller");

router.get("/networks", networksController.getAllNetworks);
router.get("/networks/:id", networksController.getNetwork);
router.post("/networks", networksController.createNetwork);
router.put("/networks/:id", networksController.updateNetwork);
router.delete("/networks/:id", networksController.deleteNetwork);

router.get("/packages", packagesController.getAllPackages);
router.get("/packages/:id", packagesController.getPackage);
router.post("/packages", packagesController.createPackage);
router.put("/packages/:id", packagesController.updatePackage);

module.exports = router;
