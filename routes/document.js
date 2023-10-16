const router = require("express").Router();
const DocumentController = require("../controllers/DocumentController");

router.post("/storedocument", DocumentController.storedocument);

// router.get("/retrieveAllData", DocumentController.retrieveAllData);

router.get("/retrieveDataById/:id", DocumentController.retrieveDataById);

module.exports = router;
