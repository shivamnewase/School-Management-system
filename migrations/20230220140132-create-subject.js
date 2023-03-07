'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      subjectName: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      subjectCode: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      classId:{
        type:DataTypes.INTEGER,
        allowNull:false,
  },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('subjects');
  }
};