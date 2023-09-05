const router = require("express").Router();
const documentController = require("../controllers/DocumentController")
router.get("/hellotest",documentController.helloworld);


router.post("/storedocument",documentController.storedocument)



module.exports = router;