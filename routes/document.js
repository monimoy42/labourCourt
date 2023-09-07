const router = require("express").Router();
const DocumentController = require("../controllers/DocumentController");


router.get("/hellotest",DocumentController.helloworld);


router.post("/storedocument",DocumentController.storedocument)



module.exports = router;
