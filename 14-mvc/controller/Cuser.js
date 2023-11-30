// 유저에 대한 처리
// Model 연결
const user = require('../model/user');

// Model 연결 전
const userInfo = {
    realId : 'hellowwolrd',
    realPw : '1234',
    name : '홍길동',
    age: 20
}


// GET /user
exports.user = (req, res) => {
    console.log(user.userInfo());
    res.render('user', { userInfo: user.userInfo() });
}

