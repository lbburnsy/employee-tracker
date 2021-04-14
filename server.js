const inquirer = require("inquirer");
const connection = require("./config/connection.js");

function start() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "Please select an option:",
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            "Update an employee's role"
        ]
    })
    .then((result) => {
        if ((result.choice) === 'View all departments') {
            viewDepartments();
        } else if ((result.choice) === 'View all roles') {
            // viewRoles();
        } else if ((result.choice) === 'View all employees') {
            // viewEmployees();
        }
    })
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
    start();
});