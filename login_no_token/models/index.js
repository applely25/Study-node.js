const Sequelize = require("sequelize");

const config = require("../config/config");

const db = {};

const sequelize = new Sequelize({ ...config, sync: true });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);

module.exports = db;