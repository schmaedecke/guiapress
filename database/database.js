const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress", "root", "G3s9t9v7l8i01!", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00"
});

module.exports = connection;
