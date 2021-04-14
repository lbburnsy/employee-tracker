const inquirer = require("inquirer");
const connection = require("./config/connection.js");
const conTable = require("console.table");

function start() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "Please select an option:",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee's role",
      ],
    })
    .then((result) => {
      if (result.choice === "View all departments") {
        viewDepartments();
      } else if (result.choice === "View all roles") {
        viewRoles();
      } else if (result.choice === "View all employees") {
        viewEmployees();
      } else if (result.choice === "Add a department") {
          addDepartment();
      } else if (result.choice === "Add a role") {
          addRole();
      }
    });
}

// View Functions for department, employees, and roles

function viewDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    const table = conTable.getTable(res);
    console.log("- - - - - - - - - - - - - - - -");
    console.log(table);
    console.log("- - - - - - - - - - - - - - - -");
    start();
  });
}

function viewRoles() {
  const query =
    "SELECT role.role_id, role.title, role.salary, department.department_id, department.department_name, role.department_id FROM role LEFT JOIN department ON role.department_id = department.department_id";
  connection.query(query, (err, res) => {
    if (err) throw err;
    const table = conTable.getTable(res);
    console.log("- - - - - - - - - - - - - - - -");
    console.log(table);
    console.log("- - - - - - - - - - - - - - - -");
    start();
  });
}

function viewEmployees() {
  const query =
    "SELECT employee.employee_id, employee.first_name, employee.last_name, department.department_name, employee.manager_id, employee.role_id, role.salary, role.title, role.role_id FROM employee INNER JOIN role ON employee.role_id = role.role_id INNER JOIN department ON role.department_id = department.department_id";
  connection.query(query, (err, res) => {
    if (err) throw err;
    const table = conTable.getTable(res);
    console.log("- - - - - - - - - - - - - - - -");
    console.log(table);
    console.log("- - - - - - - - - - - - - - - -");
    start();
  });
}

// Add functions for departments, roles, employees

function addDepartment() {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'Enter the name of the department:'
        }
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO department SET ?', {
                department_name: answer.department,
            },
            (err) => {
                if (err) throw err;
                console.log('Your department was created successfully');
                start();
            }
        );
    });
};

function addRole() {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter the name of the new role:'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the salary for this role:'
        },
        {
            name: 'department',
            type: 'input',
            message: 'Enter the department id:'
        }
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO role SET ?', {
                'title': answer.title,
                'salary': answer.salary,
                'department_id': answer.department,
            },
            (err) => {
                if (err) throw err;
                console.log("Your role was created successfully")
                start();
            }
        );
    })
}

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as id ${connection.threadId}`);
  start();
});
