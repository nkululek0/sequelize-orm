require("dotenv").config();
const { Op, DataTypes } = require("sequelize");
const sequelize = require("./services/databases/sequelize/database.js");
const employeeModel = require("./services/databases/sequelize/models/employee-model.js");
const studentModel = require("./services/databases/sequelize/models/student-model.js");
const roleModel = require("./services/databases/sequelize/models/role-model.js");

// Drop tables
// (async () => {
//     try {
//         const droppedTables = await Promise.all([
//             employeeModel.drop(),
//             roleModel.drop()
//         ]);
//     } catch (error) {
//         console.log("Issue while dropping tables");
//         console.error(error);
//     }
// })();


// Associations
roleModel.hasMany(employeeModel, {
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
employeeModel.belongsTo(roleModel, {
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


(async () => {
    try {

        // await roleModel.sync({ alter: true });
        await employeeModel.sync({ force: true });

        // const roles = await roleModel.bulkCreate([
        //     {
        //         title: "IT Admin"
        //     },
        //     {
        //         title: "Business Operator"
        //     },
        //     {
        //         title: "Branch Manager"
        //     },
        //     {
        //         title: "Logistics Manager"
        //     }
        // ], {
        //    validate: true
        // });

        const employees = await employeeModel.bulkCreate([
            {
                firstName: "Nkululeko",
                lastName: "Zikode",
                roleId: 1
            },
            {
                firstName: "Sam Sapiol",
                lastName: "Vagraa",
                roleId: 2
            },
            {
                firstName: "Gustavo",
                lastName: "Fring",
                roleId: 3
            },
            {
                firstName: "Hector",
                lastName: "Herman",
                roleId: 4
            }
        ], { validate: true });

        employees.forEach(employee => { console.log(employee.toJSON()) });
    }
    catch (error) {
        console.error(error);
    }
})();


// (async () => {
//     try {
//         const employee = await employeeModel.findOne({
//             where: {
//                 firstName: "Hector"
//             }
//         });
//         console.log(employee);
//         // const employees = await employeeModel.findAll({ raw: true });
//         // const roles = await roleModel.findAll({ raw: true });
//         // let rolesHashMap = {};
//         // roles.forEach((role) => {
//         //     rolesHashMap[role.title] = role
//         // });


//         // await Promise.all(employees.map(async (employee) => {
//         //     let capital;
//         //     switch (employee.firstName) {
//         //         case "Nkululeko":
//         //             capital = await employee.setRoleModel(rolesHashMap["IT Admin"]);
//         //             break;
//         //     }

//         //     return capital
//         // }));
//     }
//     catch (error) {
//         console.error(error);
//     }
// })();

/*
(async () => {
    try {
        await studentModel.sync({ alter: true });
        // const students = await studentModel.bulkCreate([
        //     {
        //         name: "Nkululeko",
        //         school_year: "2020",
        //         subscribed_to_wittcode: false
        //     },
        //     {
        //         name: "Jimmy",
        //         favourite_class: "History",
        //         school_year: 2024,
        //     },
        //     {
        //         name: "Maxwell",
        //         favourite_class: "Music",
        //         school_year: 2022,
        //         subscribed_to_wittcode: true
        //     }
        // ], {
        //     validate: true
        // });

        // const data = await studentModel.findAll({
        //     raw: true,
        //     where: {
        //         [Op.or]: {
        //             favourite_class: "Computer Science",
        //             subscribed_to_wittcode: false
        //         }
        //     }
        // });

        // console.log(data);

        const data2 = await studentModel.findAll({
            raw: true,
            attributes: [
                [sequelize.fn("COUNT", sequelize.col("school_year")), "num_students"],
                "school_year"
            ],
            group: "school_year"
        });

        data2.forEach((student) => {
            console.log(student);
        });
    }
    catch (error) {
        console.error(error);
    }
})();
*/