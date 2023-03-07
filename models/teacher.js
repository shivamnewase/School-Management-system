'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teacher.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    fullName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    gender: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    address: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    dob: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    mobile:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    joinDate:{
      type:DataTypes.DATE,
      allowNull:false,
    }
  }, {
    sequelize,
    tableName:'teacher',
    modelName: 'Teacher',
  });
  return Teacher;
};