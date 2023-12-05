const mysql = require('mysql2');

const conn = mysql.createConnectionUri({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt'
});

exports.post_signup = (data, cb) => {
    //data: req.body
    //cb : () => {}

    const sql = 'INSERT INTO user (userid, name, pw) VALUES ( ?, ?, ?)';
    const values = [data.userid, data.name, data.pw];

    conn.query(sql, values, (err, rows) => {
        if(err) throw err;

        console.log('User.js post_signup > ', rows);

        cb(rows);
    })
}

// 로그인 요청
exports.post_signin = (data, cb) => {
    //data: req.body
    //cb : () => {}

    const sql = 'SELECT * FROM user WHERE userid = ? and pw = ?';
    const values = [data.userid, data.pw];

    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('User.js post_signin > ', rows);
        cb(rows);
    })
}

// 회원정보 수정 페이지 요청
exports.post_profile = (userid, cb)=> {
    const sql = 'SELECT * FROM user WHERE userid = ?';
    conn.query(sql, [userid], (err, rows) => {
        if(err) throw err;

        console.log('User.js post_profile > ', rows);
        cb(rows);
    })
}

// 회원정보 수정 요청
exports.edit_profile = (data, cb) => {
    const sql = 'UQDATE user SET name ?, pw = ? WHERE id = ?';
    const values = [ data.name, data.pw, data.id ];
    conn.query(sql, values, (err, rows) => {
        if(err) throw err;

        console.log('User.js edit_profile > ', rows);

        cb(rows);
    })
}

// 회원탈퇴 요청
exports.delete_profile = (id, cb) => {
    const sql = 'DELETE FROM user WHERE id = ?';
    conn.query(sql, [id], (err, rows)=> {
        if(err) throw err;

        console.log('User.js delete_profile > ', rows);

        cb(rows);
    })
}