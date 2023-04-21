'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band, Event, stage}) {
      // define association here
      set_time.belongsTo(Band, {
        foreignKey: "band_id",
      as: "band"
      })
      set_time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
      set_time.belongsTo(stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
      
    }
  }
  set_time.init({
    band_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'set_time',
  });
  return set_time;
};