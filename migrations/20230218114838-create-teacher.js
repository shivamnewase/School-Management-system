'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull:false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      joinDate: {
        type: DataTypes.DATE,
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
    await queryInterface.dropTable('Teachers');
  }
};