const { Router } = require("express");
const { shortIdcontroller } = require('../controllers');

const router = Router();

router 
 .post("/", shortIdcontroller.createShortUrl)
 .get("/:id", shortIdcontroller.getShortUrl)
 .get("/", shortIdcontroller.getShortUrls)

 module.exports = router;