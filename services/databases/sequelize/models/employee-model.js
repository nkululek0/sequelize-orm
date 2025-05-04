require("dotenv").config();
const { DataTypes } = require("sequelize");
const sequelize = require("../database.js");

const employeeModel = sequelize.define("Employee", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        defaultValue: "password123"
    }
});

module.exports = employeeModel;