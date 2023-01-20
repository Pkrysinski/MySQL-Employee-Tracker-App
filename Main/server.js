// Initialize variables for dependent packages
const inquirer = require('inquirer');
const mysql = require('mysql2');


// User Inquirer to prompt user (in terminal via NodeJS) for answers based on questions about subjects in the standard HTML file template.
const trackEmployees = () => {

    console.log("\n- - - - - EMPLOYEE MANAGER - - - - -\n")

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
                break;
            case 'Update Employee Role':
                console.log(response.startList);
                break;
            case 'View All Roles':
                console.log(response.startList);
                break;
            case 'Add Role':
                console.log(response.startList);
                break;
            case 'View All Departments':
                console.log(response.startList);
                break;               
            case 'Add Department':
                console.log(response.startList);
                break;       
            case 'Quit':
                console.log("Goodbye!");
                break;                                          
            default:
                console.log('DEFAULT!');
        };
    });
};

const viewAllEmployees = () => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, manager_id FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id;`;
  
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

    console.log("PETER1");
    db.query(sql, (err, rows) => {
      if (err) {
         console.log({ error: err.message });
         return;
      }
      return {
        message: 'success',
        data: rows
      };
    });    
    console.log("PETER2");
}

// Initialize the program and start building your team!
trackEmployees();