# MySQL-Employee-Tracker-App

## Purpose

The purpose of this app is to make an employee/team tracking and management application which stores DEPARTMENTS and related EMPLOYEES in a MySQL database.  The teams will be 

## Educational Concepts Implemented

>Node JS

>NPM Packages (Express, Inquirer, MySQL2)

>Database Management

## Walkthrough Video

Link to walkthrough video...
https://drive.google.com/file/d/1snA64Qn5b4OT6JS8SS_4YJ-IuJHC8ikk/view


## User Story

AS A business owner...
I WANT to be able to view and manage the departments, roles, and employees in my company,
SO THAT I can organize and plan my business.

## Acceptence Criteria Notes

GIVEN a command-line application that accepts user input...

- - - - -
WHEN I start the application,
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
>DONE.  Switch/Case statement implemented after Inquirer prompt to as a user what they'd like to do.

- - - - -
WHEN I choose to view all departments,
THEN I am presented with a formatted table showing department names and department ids.
>DONE, prints the results in the console represented in a nicely formatted table (using npm package "console.table").

- - - - -
WHEN I choose to view all roles,
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role.
>DONE, prints the results in the console represented in a nicely formatted table (using npm package "console.table").

- - - - -
WHEN I choose to view all employees,
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
>DONE, prints the results in the console represented in a nicely formatted table (using npm package "console.table").

- - - - -
WHEN I choose to add a department,
THEN I am prompted to enter the name of the department and that department is added to the database.
>DONE.

- - - - -
WHEN I choose to add a role,
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database.
>DONE.

- - - - -
WHEN I choose to add an employee,
THEN I am prompted to enter the employee???s first name, last name, role, and manager, and that employee is added to the database.
>DONE.

- - - - -
WHEN I choose to update an employee role,
THEN I am prompted to select an employee to update and their new role and this information is updated in the database.
>DONE.