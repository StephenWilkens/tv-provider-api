const { Router } = require("express");
const router = Router();
const networksController = require("./controllers/networks.controller");
const packagesController = require("./controllers/providerPackages.controller");
const showsController = require("./controllers/show.controller");

router.get("/networks", networksController.getAllNetworks);
router.get("/networks/:id", networksController.getNetwork);
router.post("/networks", networksController.createNetwork);
router.put("/networks/:id", networksController.updateNetwork);
router.delete("/networks/:id", networksController.deleteNetwork);

router.get("/packages", packagesController.getAllPackages);
router.get("/packages/:id", packagesController.getPackage);
router.post("/packages", packagesController.createPackage);
router.put("/packages/:id", packagesController.updatePackage);
router.delete("/packages/:id", packagesController.deletePackage);

router.get("/shows", showsController.getAllShows);
router.get("/shows/:id", showsController.getShow);
router.post("/networks/:id/shows", showsController.createShow);
router.put("/shows/:id", showsController.updateShow);
router.delete("/shows/:id", showsController.deleteShow);

module.exports = router;
