const router=require('express').Router();
const mapController= require("../Controllers/MapPoint");


router.post("/addData",mapController.addPoint
    
)


module.exports = router
