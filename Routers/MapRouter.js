const router=require('express').Router();
const mapController= require("../controllers/MapPoint");


router.post("/addData",mapController.addPoint)


module.exports = router
