/**
 * This is an activity given by the youtube course to test my knowledge about sequelize
 */

require("dotenv").config();
const { DataTypes } = require("sequelize");
const sequelize = require("../database.js");

const studentModel = sequelize.define("Student", {
    student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 20]
        }
    },
    favourite_class: {
        type: DataTypes.STRING(25),
        defaultValue: "Computer Science"
    },
    school_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subscribed_to_wittcode: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = studentModel;