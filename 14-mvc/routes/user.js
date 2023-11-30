// 라우터 연결
const express = require('express');
const router = express.Router();

// controller 파일
const controller = require('../controller/Cuser');

// localhost:PORT/user => 기본 경로

// GET /user 
router.get('/', (req, res)=> {
    res.render('user', {userInfo});
})

// Controller 연결
// 경로를 controller와 연결지어 사용 가능
router.get('/', controller.user);


// module.exports를 통해서 router를 등록을해줘야 다른 모듈에서 사용 가능함
module.exports = router;
