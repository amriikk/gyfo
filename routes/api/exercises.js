const express = require("express");
const router = express.Router();
const exercisesCtrl = require("../../controllers/exercises");

/*---------- Public Routes ----------*/
router.post("/createEx", exercisesCtrl.createEx);
router.post("/deleteEx", exercisesCtrl.deleteEx);

/*---------- Protected Routes ----------*/

module.exports = router;