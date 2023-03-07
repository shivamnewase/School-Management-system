'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Student}) {
      // define association here
      this.belongsTo(Student,{foreignKey:'studentId',as:'student'})
    }
    toJSON(){
      return {...this.get(),id:undefined,studentId:undefined}
   }
    }
  
  Admission.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    isApproved: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
    },
  }, {
    sequelize,
    tableName: 'admissions',
    modelName: 'Admission',
  });
  return Admission;
};