DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (department_id)
);

CREATE TABLE role (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (employee_id)
);

INSERT INTO department(department_name)
VALUES ('Marketing'), ('HR'), ('Management'), ('Food and Beverage');

INSERT INTO role(title, salary, department_id)
VALUES ('Manager', 60000, 3), ('HR', 45000, 2), ('Coordinator', 35000, 1), ('Ordering', 30000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Amanda', 'G', 2, null), ('Karolyn', 'C', 1, null), ('Marina', 'F', 3, 2), ('Nick', 'L', 1, null), ('Heather', 'P', 4, null);
