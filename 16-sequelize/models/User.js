const User = (Sequelize, DataTypes) => {
    const model = sequelize.define(
        'user',{
        id: {
            // id INT NOT NULL PRIMARY KEY AUTO_INCREMEN
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // user VARCHAR(20) NOT NULL
        userid: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        pw: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, 
    {
        tableName: 'user2',
        timestamps: false
    }
    )
    return model;
}

module.exports = User;