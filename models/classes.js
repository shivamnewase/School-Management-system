'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    
   class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   // define association here
      this.hasMany(models.Subject,{foreignKey: 'classId',as:'subject'});
      this.hasMany(models.Timetable,{foreignKey: 'classId',as: 'timetable'});
       
    }
    toJSON() {
      return {...this.get(), id:undefined}
    }
  }
  Classes.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    className: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    departmentName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    classShift: {
      type:DataTypes.STRING,
      allowNull:false,
    }, 
  }, {
    sequelize,
    tableName: 'class',
    modelName: 'Classes',
  });

  return Classes;
};