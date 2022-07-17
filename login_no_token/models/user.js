const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => sequelize.define(
    "user",
    {
        email: { 
            type:DataTypes.STRING(36),
            allowNull: false,// 단 한개의 값만 종재 할 수 있는 속성
            unique: true, 
        },
        name: {
            type: DataTypes.STRING(11),
            allowNull: false,   
        },
        password: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
    },
    {
        Sequelize,
        timestamps: false, // timestamps 현재 시간을 밀리세컨드 단위로 변환하여 보여줌 
        modelName: 'User',
        tableName: 'user',
        paranoid: false, // paranoid : timestamps가 ture일때 자주 사용, 제거 날짜 기록
        charset: 'utf8mb4', //charset : 컴퓨터에서 문자를 표현하기 위해 전수값에 대응시켜놓은 체계
        collate: 'utf8mb4_general_ci', //한글 저장되도록
    },
);