const express = require('express');
const router = express.Router();
const headerLogController = require('../controllers/headerLogController');

router.get('/', headerLogController.headerlog);

module.exports = router;
