'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Students', {
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
      fatherName: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      permanentAddress: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      currentAddress: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull:false,
      },
      religion: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      year: {
        type: DataTypes.DATE,
        allowNull:false,
      },
      enrollDate: {
        type: DataTypes.DATE,
        allowNull:false,
      },
      className: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      requestApproved: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE, 
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Students');
  }
};