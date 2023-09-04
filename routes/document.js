const router = require("express").Router();
const documentController = require("../controllers/DocumentController")
router.get("/hellotest",documentController.helloworld);


router.post("/retrievedocument",documentController.retrievedocument)



module.exports = router;