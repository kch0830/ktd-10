// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안이 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수

const bcrypt = require('bcrypt');

const originalPW = '1234'; // 원본 PW
const saltRounds = 10; // 솔트 라운드 수를 정의

// 1. 비밀번호 해싱 함수
function hashPW(password) {
    return bcrypt.hashSync(password, saltRounds); // salt를 자동으로 생성
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
// 같은지, 다른지만 알려줌
function comparePW(password, HashedPw) {
    return bcrypt.compareSync(password, hashedPW);
}

// 사용 예제
// 원본 비번을 해싱한 결과
const hashedPW = hashPW(originalPW)
console.log(`Hashed PW: ${hashedPW}`);

// 원본 PW와 해시된 PW 일치하는지 확인
const isMatch = comparePW(originalPW, hashedPW);
// 같으면 true, 다르면 false
console.log(`originalPW === hashedPW : ${isMatch}`);

const isMatch2 = comparePW('hello', hashedPW);
// 같으면 true, 다르면 false
console.log(`originalPW === hashedPW : ${isMatch2}`);