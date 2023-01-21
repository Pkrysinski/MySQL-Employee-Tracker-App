// Initialize variables for dependent packages
const inquirer = require('inquirer');
const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);    

// User Inquirer to prompt user (in terminal via NodeJS) for answers based on questions about subjects in the standard HTML file template.
const trackEmployees = () => {

    inquirer
    .prompt([
      {
      type: 'list',
      message: 'What would you like to do?',
      name: 'startList',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
      },
    ])
    // Once user prompts have been completed, ask the user if they're done creating their team, or if they want to add more memebers.
    .then((response) => {

        // Using a switch/case statement here depending on what the user selects from above as their action.
        switch (response.startList) {
            case 'View All Employees':
                console.log(response.startList);
                viewAllEmployees();
                break;
            case 'Add Employee':
                console.log(response.startList);
                trackEmployees();
                break;
            case 'Update Employee Role':
                console.log(response.startList);
                trackEmployees();
                break;
            case 'View All Roles':
                console.log(response.startList);
                viewAllRoles();
                break;
            case 'Add Role':
                console.log(response.startList);
                trackEmployees();
                break;
            case 'View All Departments':
                console.log(response.startList);
                viewAllDepartments();
                break;               
            case 'Add Department':
                console.log(response.startList);
                addDepartment();
                break;
            case 'Quit':
                console.log("Goodbye!");
                UI.close();
                break;
            default:
                console.log('DEFAULT!');
        };
    });
};


// GET METHODS - START
const viewAllEmployees = () => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, manager_id FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id;`;

    db.query(sql, function(err, results) {
        if (err) {
            console.log({ error: err.message });
            return;
         } else {
            console.log("\n");
            console.table(results); // Print the results in the console represented in a nicely formatted table (using npm package "console.table")
            console.log("\n");
            trackEmployees();
         }
        }
      );   
};

const viewAllRoles = () => {
    const sql = `SELECT * FROM role`;

    db.query(sql, function(err, results) {
        if (err) {
            console.log({ error: err.message });
            return;
         } else {
            console.log("\n");
            console.table(results); // Print the results in the console represented in a nicely formatted table (using npm package "console.table")
            console.log("\n");
            trackEmployees();
         }
        }
      );   
};

const viewAllDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, function(err, result) {
        if (err) {
            console.log({ error: err.message });
            return;
         } else {
            console.log("\n");
            console.table(result); // Print the results in the console represented in a nicely formatted table (using npm package "console.table")
            console.log("\n");
            trackEmployees();
         }
        }
      );   
};
// GET METHODS - END

// POST METHODS - START
const addEmployee = () => {
};

const addDepartment = () => {
    console.log("\n- - - - - ADD DEPARTMENT - - - - -\n")

    inquirer
    .prompt([
      {
      type: 'input',
      message: 'Please enter in the name of the department:',
      name: 'departmentName',
      },
    ])
    // Once user prompts have been completed, ask the user if they're done creating their team, or if they want to add more memebers.
    .then((response) => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const params = [response.departmentName];
      
        db.query(sql, params, (err, result) => {
            if (err) {
                console.log({ error: err.message });
                return;
        } else {
            console.log(`Department ${response.departmentName} added to the database`);
            // TDB TODO - any extra control flow needed here?
            trackEmployees();
        }
      });
    });
};

const addRole = () => {
};
// POST METHODS - END

// PUT METHODS - START
const updateEmployeeRole = () => {
};
// PUT METHODS - END

// Initialize the program and start building your team!
trackEmployees();