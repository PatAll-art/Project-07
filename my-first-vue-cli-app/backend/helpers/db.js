const tedious = require("tedious");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

function initialize() {
  const dialect = "mssql";
  const host = 'localhost';
    const userName = 'sa';
    const password = 'P@trici@12345';

  // connect to db
  const sequelize = new Sequelize("project7", userName, password, {
    host,
    dialect,
  });

  // init models and add them to the exported db object
    db.User = require('../models/users')(sequelize);
    db.Thread = require('../models/threads')(sequelize);
  // sync all models with database
    sequelize.sync({ alter: true });
}
