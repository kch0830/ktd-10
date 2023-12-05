const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json') ['development'];

console.log('config > ', config);

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,

)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require('./Visitor')(sequelize, Sequelize);
// models/Visitor.js 에서 정의한 모델이 db.Visitor에 들어감
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: ~~~ }

//User 추가
db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
// db라는 변수를 내보냄
// 시퀄라이즈 객체를 만들고 모듈로써 내보내서 "다른 파일에서 모두 같은 객체를 사용할 수 있게 함"