'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      // define association here
      //
      this.hasMany(Post, {foreignKey: 'userId',as:'posts'})
    }
    toJSON() {
      return {...this.get(), id:undefined}
    }
  }
  User.init({

     uuid: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
     },
     userName: {
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull:{msg:'user must have a username'},
          notEmpty:{msg: 'userName not be empty'},
        
       }
     },
     email:{
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull:{msg:'user must have a email'},
        notEmpty:{msg: 'name not be empty'},
        isEmail:{msg:'must be a valid email address'},
     }
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
         notNull:{msg:'user must have a name'},
         notEmpty:{msg: 'name not be empty'}
      }
    },
     password: {
      type:DataTypes.STRING,
      allowNull:false,
     },
    role:{
      type: DataTypes.STRING,
      validate: {
        notNull:{msg:'user must have a role'},
        notEmpty:{msg: 'name not be empty'}
     },
      allowNull:false,
    },
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};