const User = require() // 완성 필요

exports.main = (req, res) => {
    res.render('index');
}

exports.get_signup = (req, res) => {
    res.render('signup');
}

exports.get_signin = (req, res) => {
    res.render('signin');
}

// 회원가입 요청
exports.post_signup = (req, res) => {
    console.log('post_signup > ', req.body);
    // 뷰 (요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰 (응답)

    User.post_signup(req.body, (result) => {
        // result: rows
        res.send(result);
    })
    
}

// 로그인 요청
exports.post_signin = (req, res) => {
    console.log(req.body);
    User.post_signin(req.body, (result) => {
        // result: rows [{}]
        if(result.legnth > 0) res.send({ isLogin: true, userInfo: result[0] });
        else res.send({} isLogin: false});
    })
    res.send();
}

exports.post_profile = (req, res) => {
    console.log(req.body);
    res.send();
}