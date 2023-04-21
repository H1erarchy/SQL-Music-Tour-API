'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({stage, stage_event, meet_greet, set_time}) {
      // define association here
      Event.belongsToMany (stage, {
        foreignKey: "event_id",
        as: "stages",
        through: stage_event
      })
    }
  }
  Event.init({
    band_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};