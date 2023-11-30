const express = require('express');
const router = express.Router();

// controller 파일
const controller = require('../controller/Cprac');

// Controller 연결
// 경로를 controller와 연결지어 사용 가능
router.get('/', controller.prac);
router.post('/login', controller.info);

// module.exports를 통해서 router를 등록을해줘야 다른 모듈에서 사용 가능함
module.exports = router;
