'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band, Event}) {
      // define association here
      meet_greet.belongsTo (Band, {
        foreignKey: "band_id",
        as: "band"
      })
      meet_greet.belongsTo (Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  meet_greet.init({
    band_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'meet_greet',
  });
  return meet_greet;
};