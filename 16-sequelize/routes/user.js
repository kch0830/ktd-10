const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// localhost:PORT/user 기본

router.get('/', controller.main);

// GET /user - 메인 페이지
router.get('/', controller.main);
// GET /user/signup - 회원가입 페이지
router.get('/signup', controller.get_signup);
// GET /user/signin - 로그인 페이지
router.get('/signin', controller.get_signin);

module.exports = router;