-- PILIH DATABASE : USE NAMA_DB
use classicmodels;
use practice_jcwm13;

-- GET DATA : SELECT column, ... FROM nama_table
SELECT * FROM users;
SELECT user_id, username, password FROM users;
SELECT * FROM customers;
SELECT customerNumber, customerName, country FROM customers;

-- GET DATA WITH CONDITION : WHERE ? AND, OR, COMPARE (<, <=, >, >=, =), IS NULL, IS NOT NULL
SELECT customerNumber, customerName, salesRepEmployeeNumber AS salesNumber
FROM customers 
WHERE salesRepEmployeeNumber IS NOT NULL;

SELECT customerNumber, customerName, country
FROM customers
WHERE country = 'USA';

SELECT customerNumber, customerName, country
FROM customers
WHERE country = 'UK' OR country = 'Germany';

SELECT customerNumber, customerName, country, creditLimit, salesRepEmployeeNumber AS salesNumber
FROM customers
WHERE salesRepEmployeeNumber IS NOT NULL AND country = 'USA' AND creditLimit > 50000;

-- SORT DATA : ORDER BY column_name ASC/DESC
SELECT * FROM employees
ORDER BY officeCode DESC;

SELECT * FROM employees
WHERE officeCode > 1
ORDER BY officeCode DESC;

-- CONCAT : MENGGABUNG 2 COLUMN
SELECT employeeNumber, concat(firstName, ' ', lastName) AS employeeName
FROM employees;

-- GROUP BY : MENGKELOMPOKAN DATA DI KOLOM REF DENGAN VALUE YANG SAMA
SELECT customerNumber, customerName, country
FROM customers
WHERE salesRepEmployeeNumber IS NOT NULL
GROUP BY country;

-- COUNT, MAX, MIN, AVG, SUM
SELECT COUNT(*) FROM customers;
SELECT COUNT(salesRepEmployeeNumber) FROM customers;

SELECT MAX(creditLimit), customerName, country FROM customers;
SELECT SUM(quantityOrdered) FROM orderdetails;

-- GROUP + COUNT, MAX, MIN, SUM, AVG
SELECT COUNT(country) AS totalCustomer, country FROM customers
GROUP BY country;

-- HAVING : CONDITIONAL AFTER GROUP BY
SELECT COUNT(country) AS totalCustomer, country
FROM customers
WHERE salesRepEmployeeNumber IS NOT NULL
GROUP BY country
HAVING totalCustomer >= 5;

-- LIMIT AND OFFSET : EXP : PGINATION
SELECT * FROM customers
LIMIT 10;

SELECT * FROM customers
LIMIT 5 OFFSET 5;

SELECT * FROM customers
LIMIT 10, 5; -- OFFSET, LIMIT

-- INSERT, UPDATE, DELETE
INSERT INTO users (username, email, password, role, status) VALUES ('olaf', 'olaf@gmail.co.uk', 'olafalafa', 'user', 0);
INSERT INTO users SET username = 'elsa', email = 'elsa@gmail.com', password = 'abacadabra', role = 'user', status = 0;
INSERT INTO users (username, email, password, role, status)
VALUES ('ariana', 'ariana@gmail.com', 'grande', 'user', 0),
('jennie', 'jenni@gmail.com', 'blink', 'user', 0),
('lisa', 'lisa@gmail.com', 'lalisa', 'user', 0);

-- UPDATE & DELETE : PROVIDE ID
UPDATE users SET username = 'Tom' WHERE user_id = 15;
DELETE FROM users WHERE user_id = 6;


-- JOIN : INNER & OUTER => MENGGABUNGKAN 2 TABLE BERDASARKAN FOREIGN KEY
SELECT cs.customerNumber, cs.customerName, cs.salesRepEmployeeNumber, em.employeeNumber, em.firstName
FROM customers cs
JOIN employees em ON cs.salesRepEmployeeNumber = em.employeeNumber;

SELECT o.orderNumber, o.orderDate, o.status, od.orderNumber, od.productCode, od.quantityOrdered
FROM orders o
JOIN orderdetails od ON o.orderNumber = od.orderNumber;

SELECT cs.customerNumber, cs.customerName, cs.salesRepEmployeeNumber, em.employeeNumber, em.firstName
FROM customers cs
LEFT JOIN employees em ON cs.salesRepEmployeeNumber = em.employeeNumber
ORDER BY em.employeeNumber;

SELECT cs.customerNumber, cs.customerName, cs.salesRepEmployeeNumber, em.employeeNumber, em.firstName
FROM customers cs
RIGHT JOIN employees em ON cs.salesRepEmployeeNumber = em.employeeNumber
ORDER BY em.employeeNumber;

-- LATIHAN :
-- TAMPILAKN DATA DARI ORDER DAN ORERDETAIL
-- quantity ordered > 50 dan status = shipped

-- cari total pegawai yg belom punya customer
-- hitung total customer untuk tiap pegawai
SELECT em.employeeNumber, em.firstName, count(cs.salesRepEmployeeNumber) totalCustomer
FROM employees em
LEFT JOIN customers cs
ON em.employeeNumber = cs.salesRepEmployeeNumber
GROUP BY em.employeeNumber
ORDER BY totalCustomer;

-- HIRARCIAL DATABASE : SELF JOIN => LEFT JOIN OR CTE
-- FIND THE ROOT NOTE OR TOP PARENT
SELECT * FROM categories WHERE parent_id IS NULL;

-- FIND IMMEDIATE CHILDREN OF NODES : FIND THE CHILD OF PARENT (id)
SELECT * FROM categories WHERE parent_id = 2;
SELECT * FROM categories WHERE parent_id = 1;

-- FINDING THE LEAF NODES : NODES THAT HAS NO CHILD
SELECT c1.id, c1.category 
FROM categories c1
LEFT JOIN categories c2
ON c1.id = c2.parent_id
WHERE c2.id IS NULL;

-- RETIVEW THE WHOLE TREE : MENAMPILKAN SEMUA TRUKTUR HIRARKI
-- CTE : COMMON TABLE EXPRESSION => LOOP OPERATION
WITH usaCustomers (id, customerName, country, credit) AS (
	SELECT customerNumber, customerName, country, creditLimit
    FROM customers
    WHERE country = 'USA'
)
SELECT * FROM usaCustomers
WHERE credit > 100000
ORDER BY id;

-- LOOP : RECURSIVE
WITH RECURSIVE result (id, total) AS (
	-- INITIAL VALUE
    SELECT 1, 0
    
    -- UNION
    UNION ALL
    
    -- RECURSIVE
    SELECT id + 1, total + 1
    FROM result
    WHERE total < 10 -- TERMIATE CONDITION
)
SELECT * FROM result;

-- RETRIVE A WHORE HIRARCIAL DATABASE
WITH RECURSIVE tree (id, category, path) AS (
	-- INITIAL VALUE
    SELECT id, category, category AS path
    FROM categories
    WHERE parent_id IS NULL
    
    -- UNION
    UNION ALL
    
    -- RECURSIVE
    SELECT ct.id, ct.category, CONCAT(t.path, ' > ', ct.category)
    FROM tree t
    JOIN categories ct
    ON t.id = ct.parent_id -- TERMINATE CONDITION
)
SELECT * FROM tree
ORDER BY path;

-- RETIVE SINGLE / SUB-TREE
WITH RECURSIVE tree (id, category, path) AS (
	-- INITIAL VALUE
    SELECT id, category, category AS path
    FROM categories
    WHERE parent_id = 6
    
    -- UNION
    UNION ALL
    
    -- RECURSIVE
    SELECT ct.id, ct.category, CONCAT(t.path, ' > ', ct.category)
    FROM tree t
    JOIN categories ct
    ON t.id = ct.parent_id -- TERMINATE CONDITION
)
SELECT * FROM tree
ORDER BY path;

-- SINGLE PATH
WITH RECURSIVE single_path (id, category, parent_id) AS (
	-- INITIAL VALUE
    SELECT id, category, parent_id
    FROM categories
    WHERE id = 15 -- CHILD NODE
    
    -- UNION
    UNION ALL
    
    -- RECURSIVE
    SELECT ct.id, ct.category, ct.parent_id
    FROM single_path sp
    JOIN categories ct
    ON sp.parent_id = ct.id -- TERMINATE CONDITION
)
SELECT * FROM single_path;