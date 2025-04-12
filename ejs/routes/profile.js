const express = require('express');
var router = express.Router();
const profileController = require('../controllers/headerLogController');
const profileController2 = require('../controllers/profileController')

router.get('/', profileController.profile);
router.get('/', profileController2.profile);


module.exports = router;