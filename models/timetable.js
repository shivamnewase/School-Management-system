'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Classes,{foreignKey: 'classId',as:'class'})
    }
    toJSON(){
      return {...this.get(),id:undefined,classId:undefined}
   }
  }
  Timetable.init({
    day: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    subjectName:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    startTime: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    endTime: {
      type:DataTypes.STRING,
      allowNull:false,
    },
  }, {
    sequelize,
    tableName: 'timetable',
    modelName: 'Timetable',
  });
  return Timetable;
};