'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  
   class Subject extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
    static associate(models) {
      // define association here
      this.belongsTo(models.Classes,{foreignKey: 'classId',as:'class'});
      
    }
    toJSON(){
      return {...this.get(),id:undefined,classId:undefined}
   }
  }
  Subject.init({
    subjectName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    subjectCode: {
      type:DataTypes.STRING,
      allowNull:false,
    },
  }, {
    sequelize,
    tableName:'subject',
    modelName: 'Subject',
  });

 

  return Subject;
};