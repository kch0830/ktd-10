// [After] Model 연결
const Comment = require('../model/Comment');


// [Before] Model 연결 전
// (임시) DB로부터 받아온 데이터 댓글 목록
const comments = [
    {
        id: 1,
        userid: 'hellowwold',
        date: '2022-10-31',
        comment: '안녕하세요',
    },
    {
        id: 2,
        userid: 'hell',
        date: '2022-11-31',
        comment: '안반가우',
    },
    {
        id: 3,
        userid: 'apple',
        date: '2022-12-31',
        comment: 'ㅎ윙',
    },
    {
        id: 4,
        userid: 'good',
        date: '2022-09-31',
        comment: 'good!',
    }

]

// GET /
exports.main = (req, res)=> {
    res.render('index');
}

// GET /comments
exports.commnets = (req, res) => {
    console.log(Comment.commentInfos());
    res.render('commnets', { commentInfos: Comment.commentInfos() });
}

// GET /comment/:id
exports.comment = (req, res)=> {
    // req.query = /commnet/:id=1
    console.log(req.params); // {id: '1'} : 라우트 매개변수에 대한 정보가 담겨 있음
    console.log('id >', req.params.id);

    const commnets = Comment.commentInfos() // model 연결 후 추가
    
    const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
    console.log(comments[commentId - 1]);

    // 존재하지 않는 댓글 id 접속시 404 페이지
    if(commnetId < 1 || commnetId > comments.length) {
        return res.render('404');
    }

    console.log(typeof commentId); // string

    // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
    if(isNaN(commentId)) {
        return res.render('404');
    }

    res.render('comment', { commnetInfo: comments[commentId -1]});
}