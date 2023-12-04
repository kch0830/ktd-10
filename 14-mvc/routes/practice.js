const express = require('express');
const router = express.Router();

// controller 파일
const controller = require('../controller/Cpractice.js');

// GET / practice
router.get('/', controller.main);

// POST /practice/login
router.post('/login', )
module.exports = router;

