const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    userName: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
    threadId: { type:DataTypes.BIGINT, allowNull: false }
  };


return sequelize.define('Comment', attributes);

}
