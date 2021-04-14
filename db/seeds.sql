USE company_db;

INSERT INTO department(department_name)
VALUES ('Marketing'), ('HR'), ('Management'), ('Food and Beverage');

INSERT INTO role(title, salary, department_id)
VALUES ('Manager', 60000, 3), ('HR', 45000, 2), ('Coordinator', 35000, 1), ('Ordering', 30000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Amanda', 'G', 2, null), ('Karolyn', 'C', 1, null), ('Marina', 'F', 3, 2), ('Nick', 'L', 1, null), ('Heather', 'P', 4, null);
