// crypto - nodejs 내장 모듈
const crypto = require('crypto');

// 1. crypto '단방향' 암호화 구현
// createHash()
// : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

// - password를 sha512 알고리즘 방식으로 암호화하고,
// - base64 방식으로 인코딩하여 리턴하는 함수

const createHashedPw = (password) => {
    // createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest('base64');
}
// 해시 함수의 한계 : 레인보우 테이블
// => 암호화된 pw를 빠르게 역추적해서 원본 pw를 찾아낼 수 있음
console.log(createHashedPw('1234'));
console.log(createHashedPw('1234')); // 같은 pw라면 같은 hash값이 나옴
console.log(createHashedPw('2345'));

// ////////////////////////////
// 2. pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
// - 비밀번호 기반 키 도출 함수, 주로 비번 저장시 사용
// - buffer 형식의 데이터를 반환 -> toString() 이용해 문자열로 반환

// (1) 단방향 암호화 생성 함수
// - 임의의 솔트 값을 생성
// - 해당 솔트와 제공된 비밀번호를 기반으로 해시 생성
// - 생성된 솔트와 해시를 반환
function saltAndHashPW(password) {
    const salt = crypto.randomBytes(16).toString('base64'); // 임의의 salt 생성
    const iteration = 100; // 해시 함수를 반복할 횟수
    const keylen = 64; // 생성할 key의 길이
    const algorithm = 'sha512';

    // hash 생성 => salt랑 password를 결합해서 해시 생성
    const hash = crypto.pbkdf2Sync(password, salt, iteration, keylen, algorithm).toString('base64'); // buffer -> string 변환

    return { salt, hash };
}

// (2) 암호 비교 함수
// : inputPW = 제공된 비밀번호, salt, hash 기반으로 새로운 해시를 생성하고, 새로운 해시와 저장된 savedHash를 비교
// 제공된 PW와 제공된 PW가 같으면, 두 해시 값도 일치
function checkPW(inputPW, savedSalt, savedHash) {
    const iteration = 100; // 해시 함수를 반복할 횟수
    const keylen = 64; // 생성할 key의 길이
    const algorithm = 'sha512';

    const hash = crypto.pbkdf2Sync(inputPW, savedSalt, iteration, keylen, algorithm).toString('base64');

    return savedHash === hash; // 같으면 true, 다르면 false 반환
}

// 사용 예제
const password = '1234!';

// pw 암호화
const { salt, hash } = saltAndHashPW(password);
console.log(`비번 암호화에 쓰인 salt : ${salt}, 암호화 된 hash : ${hash}`);

// 비밀번호 확인
const inputPW = '1234!';
const isMatch = checkPW(inputPW, salt, hash); // true or false
console.log(`비밀번호 일치 : ${isMatch}`);
