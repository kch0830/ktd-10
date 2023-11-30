// [After] Model 연결
const info = require('../model/prac');

// GET /
exports.prac = (req, res)=> {
    res.render('prac');
}
W
// GET /comments
exports.info = (req, res) => {
    if(req.body.id == info.userid() && req.body.pw == info.userpw()){
        res.send('ture');
    } else {
        res.send('false');
    }
}

