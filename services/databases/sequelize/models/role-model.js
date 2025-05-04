require("dotenv").config();
const { DataTypes } = require("sequelize");
const sequelize = require("../database.js");

const roleModel = sequelize.define("role", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [1, 20]
        }
    }
}, {
    timestamps: false
});

module.exports = roleModel;