-- choose database
use sakila;

-- get data using select
select * from actor;
select first_name, last_name from actor;

-- use classicmodels
use classicmodels;
select * from customers;
select customerName, phone, country from customers;

select * from products;
select * from productlines;

-- order data => ORDER BY
SELECT * FROM customers ORDER BY customerName;
SELECT customerNumber, customerName, country FROM customers ORDER BY customerName asc;
select customerNumber, customerName, country from customers order by country desc;

-- WHERE CLAUSE => search condition
select customerNumber, customerName, country
from customers
where country = 'UK';

select customerNumber, customerName, country
from customers
where country = 'Germany';

select * from employees;
select * from employees where officeCode = 1;
select * from employees where jobTitle = 'Sales Rep';

-- WHERE + AND
select customerName, postalCode, country
from customers
where country = 'France' and postalCode = 44000;

select * from employees
where jobTitle = 'Sales Rep' and officeCode = 4;

select * from customers
where country = 'Germany' and city = 'Frankfurt' and salesRepEmployeeNumber = 1504;

-- WHERE + OR
select * from employees
where jobTitle = 'Sales Rep' or officeCode = 4;

select * from customers
where city = 'Paris' or country = 'USA';

select * from customers
where city = 'Paris' or country = 'USA'
order by country;

select * from customers
where country = 'UK' or country = 'USA'; -- not recommended

-- WHERE + BETWEEN => get data in range value
select * from employees
where officeCode between 1 and 3;

select * from orderdetails
where orderLineNumber between 5 and 8
order by orderLineNUmber desc;

-- WHERE + IN => match value
select * from customers
where country in ('UK', 'USA');

select * from orderdetails
where orderLineNumber in (7, 11, 15);

select * from employees
where officeCode in (1, 3, 4)
order by officeCode;

select * from customers
where city in ('Paris', 'Las vegas');

-- WHERE + LIKE
select * from employees
where firstName like 'L%';

select * from employees
where firstName  like '%ry';

select * from employees
where lastName like '%on%';

-- IS NULL or IS NOT NULL
select * from employees
where reportsTo is null;

select * from employees
where reportsTo is not null;

select * from orders
where comments is null;

select * from customers
where salesRepEmployeeNumber is null;

-- MATH OPERATOR => >, <, >=, <=, =
select * from employees
where officeCode > 3;

select * from orderdetails
where quantityOrdered > 30;

select * from orderdetails
where orderLineNumber < 3;

-- LIMIT and OFFSET
select * from customers
limit 5;

select * from customers
limit 5 offset 3;

select * from customers
limit 3, 5;

select * from customers
where country = 'USA'
limit 10;

select customerName, city, state, country
from customers
where country in ('USA', 'Germany')
order by customerName
limit 2, 5;

-- get data customer salesRepEmploye !== null, country = germay, nama mengandung huruf n, dan urutkan berdarkan nama
select * from customers
where salesRepEmployeeNumber is not null
and country = 'Germany'
and customerName like '%n%'
order by customerName;

-- get data customer salerRepEmployee != null dan credit limit > 60000, urutkan berdasarkan credit limit
select * from customers
where salesRepEmployeeNumber is not null
and creditLimit > 60000
order by customerNumber
limit 4, 10;

--
select * from orders;
select * from orderdetails;

-- get data from orderdetails , qty > 50 tapi orderlineNumber < 5, urutkan orderlineNumber
-- get data orders dimana rentang hari pengiriman bulan 7-10
select * from orderdetails
where quantityOrdered > 50 and orderLineNumber < 5
order by orderLineNumber;

select * from orders
where date(shippedDate) between date('2003-07-01') and date('2003-10-30');

-- NOTE : 2012-03-11 00:00:00 format date in MySQL

-- Aggregate Function => CONCAT, COUNT, MIN, MAX, AVG, SUM
select * from employees;

select employeeNumber, concat(firstName, ', ', lastName) as employee_name, officeCode
from employees;

select customerName, concat(country, ', ', city) as address from customers
order by country
limit 10;

select count(*) as total_employees from employees;
select count(*) as total_customers from customers;
select count(*) as total_customers from customers where salesRepEmployeeNumber is null;
select count(*) as total_product from products;

select * from orderdetails order by quantityOrdered;
select min(quantityOrdered) from orderdetails;
select min(orderLineNumber) from orderdetails;

select max(quantityOrdered) from orderdetails;
select max(orderLineNumber) from orderdetails;

select * from products;
select max(buyPrice) from products;

select sum(quantityOrdered) from orderdetails;

select avg(quantityOrdered) from orderdetails;

-- NOTES : doing math operation (+, *, /, -) during select process
select *, quantityOrdered * priceEach as total from orderdetails;

-- GROUP BY => grouped a data (mengkelompokan data)
select customerName, city, country from customers
group by country
order by country;

select * from orders
group by status;

select *, count(status) as total_shipped from orders
group by status;

select city, country, count(country) as total_customers_percountry from customers
group by country
order by country;

select city, country from customers
order by country;

select * from employees;

select *, count(jobTitle) as total_employee from employees
group by jobTitle;

select * from customers;
select * from orderdetails;

-- get total data user , group by salesRepEmployeNumber and count total customer
-- get total data di UK, USA
-- data orderdetail, group by ordernumber, hitung total order price by order by order number
-- semua data di urutkan
