// [After] Model 연결
const User = require('../model/User');

// 유저에 대한 처리
exports.user = (req, res) => {
    res.render('user', { userInfo: User.userInfo() });
};