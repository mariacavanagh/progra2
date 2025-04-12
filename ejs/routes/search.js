const express = require('express');
var router = express.Router();
const searchresultsController = require('../controllers/searchresultsController');

router.get('/', searchresultsController.searchresults);

module.exports = router;