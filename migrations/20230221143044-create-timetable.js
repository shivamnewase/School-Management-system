'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Timetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      day: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      classId:{
        type:DataTypes.STRING,
        allowNull:false,
     },
      subjectName: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      startTime: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      endTime: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('Timetables');
  }
};