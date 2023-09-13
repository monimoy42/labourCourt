const router = require("express").Router();
const DocumentController = require("../controllers/DocumentController");
//const { ObjectId } = require('mongodb');


//const objectId = new ObjectId();




router.get("/hellotest", DocumentController.helloworld);


router.post("/storedocument", DocumentController.storedocument)

router.get("/retrieveAllData", DocumentController.retrieveAllData)

router.get("/retrieveDataById/:id", DocumentController.retrieveDataById)



module.exports = router;