-- View All Employees
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, manager_id
FROM department
JOIN role ON department.id = role.department_id
JOIN employee ON role.id = employee.role_id;

-- View All Roles
SELECT *
FROM role;

-- View All Departments
SELECT *
FROM department;