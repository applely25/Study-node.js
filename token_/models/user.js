const Sequelize  = require("sequelize");

module.exports = (sequelize, Datatypes) => sequelize.define(
    "user",
    {
        email :{
            type : Datatypes.STRING(30),
            allowNull : false,
            unique : true,
        },
        name : {
            type : Datatypes.STRING(10),
            allowNull : false,
        },
        password : {
            type : Datatypes.STRING(),
            allowNull : false,
        },
    },
    {
        Sequelize,
        timestamps : false, // 현재 시간을 밀리셐컨드 단위로 변환하여 보여줌
        modelName : 'User',
        tableName : 'user',
        paranoid : false, //삭제 하라는 지시를 받았을 때 실제로 삭제되지 않는 테이블
        charset : 'utf8mb4', //한글 + 이모티콘
        collate : 'utf8mb4_general_ci',
    },
);