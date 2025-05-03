require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_NAME
});

const employeeModel = sequelize.define("Employee", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 10]
        }
    },
    password: {
        type: DataTypes.STRING,
        defaultValue: "password123"
    }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log(`successfully connected to database: ${ process.env.DB }`);

        await employeeModel.sync();
        console.log("successfully created table");

        const user = await employeeModel.create({
            firstName: "Nkululeko",
            lastName: "Zikode",
            role: "IT Admin"
        });

        // When updating an existing entry
        // user.firstName = "bob";
        // user.save();

        // When inserting many entries at once
        // const users = await employeeModel.bulkCreate([
        //     {
        //         firstName: "Sam Sapiol",
        //         lastName: "Vagraa",
        //         role: "Some weird role that is not clearly defined"
        //     }
        // ],{ validate: true });
        console.log(user.toJSON());
    } catch (error) {
        console.error(error);
    }
})();