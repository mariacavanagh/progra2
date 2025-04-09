const express = require('express');
const router = express.Router();
const headerLogController = require('../controllers/headerLogController');

router.get('/headerlogueado', headerLogController.log);

module.exports = router;
