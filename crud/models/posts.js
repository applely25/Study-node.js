const sequelize = require("sequelize");

module.exports = (sequelize, Datatypes) => {
    return sequelize.define("Posts",{
        id: {
            type : Datatypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        title :{
            type : Datatypes.STRING(10),
            allowNull : false,
        },
        context : {
            type : Datatypes.STRING,
            allowNull : false
        }
    });

}