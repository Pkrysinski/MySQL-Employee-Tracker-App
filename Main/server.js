// Initialize variables for dependent packages
const inquirer = require('inquirer');


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



// Initialize the program and start building your team!
trackEmployees();