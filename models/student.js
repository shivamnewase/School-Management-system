'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Admission}) {
      // define association here
      this.hasOne(Admission,{foreignKey:'studentId',as:'admissions'});
    }
    toJSON() {
      return {...this.get(), id:undefined}
    }
    
  }
  Student.init({
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
    fatherName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    motherName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    permanentAddress: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    currentAddress: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    district: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    dob: {type:DataTypes.DATE,
      allowNull:false,
    },
    religion: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    year: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    enrollDate: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    className: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    requestApproved: 
    {type:DataTypes.BOOLEAN,
      allowNull:false,
    },
  }, {
    sequelize,
    tableName:'student',
    modelName: 'Student',
  });
  return Student;
};