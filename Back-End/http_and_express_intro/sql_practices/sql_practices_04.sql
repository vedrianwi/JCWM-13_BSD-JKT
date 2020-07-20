use classicmodels;
select * from customers;

select country, creditLimit from customers
where country = 'USA' and creditLimit > (
	select avg(creditLimit) from customers where country = 'Germany'
)
order by creditLimit;

select * from orderdetails;

select orderNumber, sum(quantityOrdered) as total_quantity, sum(quantityOrdered * priceEach)  as total_price
from orderdetails
group by orderNumber
having total_quantity > (
	select avg(avg_qty) from (
		select sum(quantityOrdered) as avg_qty from orderdetails group by orderNumber
    ) as avg_total_qty
) and total_price > (
	select avg(total) from (
		select sum(quantityOrdered * priceEach) as total from orderdetails group by orderNumber
    ) as avg_total_p
)
order by total_quantity;

-- RELATIONAL DATABASE => Foreign Key => LINK BETWEEN TWO TABLES
-- ONE TO ONE => user & profile, order & orderdetails
-- ONE TO MANY => user & orders, user a => order 1, order 2, user b => order 3, order 4, order 5
-- MANY TO MANY => oderdetails & product

use practice_jcwm13;
select * from users;
select * from profile;

-- LINK BETWEEN TWO OR MORE TABLES => JOIN
-- CROSS JOIN => default, no condition => join per row, total row = row table 1 * row table 2

select * from users join profile;
insert into users (username, email, role) values ('lollipop', 'lollipop@gmail.com', 'user');

-- NATURAL JOIN => otomatis mencari nama kolom yang sama sbg acuan pencocokan data, * syarat : ada nama kolom yang sama
select * from users natural join profile;

use classicmodels;
select * from orders;
select * from orderdetails;
select * from products;
select * from productlines;

select * from orders natural join orderdetails;
select * from products natural join productlines;
select * from productlines natural join products;

-- INNER JOIN / JOIN : condition => ON or WHERE, data yang ditampilkan hanya data yang memenuhi kondisi.
select * from users u join profile p on u.user_id = p.user_id;
select * from customers c join employees em on c.salesRepEmployeeNumber = em.employeeNumber;

select c.customerNumber, c.customerName, c.creditLimit, em.employeeNumber, concat(em.firstName, ', ', em.lastName) as employee_name
from customers c 
join employees em 
on c.salesRepEmployeeNumber = em.employeeNumber
order by employee_name;

-- PR : filter data, tamplikan customer dengan creditlimit terbesar per employee_name

select * from orders o
join orderdetails od
on o.orderNumber = od.orderNumber
where o.status = 'Cancelled'
limit 10;

select * from employees em
join offices o
on em.officeCode = o.officeCode;

-- JOIN > 2
select * from orders o
join orderdetails od on o.orderNumber = od.orderNumber
join customers c on c.customerNumber = o.customerNumber;

-- OUTER JOIN => LEFT and RIGHT JOIN
-- LEFT JOIN : jika ditable kiri tidak memenuhi kondisi, data tetap ditampikan namun value di table kana akan null.
select * from users u
left join profile p
on u.user_id = p.user_id;

-- RIGHT JOIN : sama cuman kebalikan dari LEFT JOIN
select * from users u
right join profile p
on u.user_id = p.user_id;

select * from profile p
right join users u
on u.user_id = p.user_id;

select * from customers c
left join employees em
on c.salesRepEmployeeNumber = em.employeeNumber;

-- tampilan data nama employee(concate firtsname + lastname ) dan total customer
-- filter yang totalnya > rata2 total cutsomer setiap employee

select em.employeeNumber, concat(em.firstname, ' ', em.lastname) as employee_name, count(customerNumber) as total_customer
from employees em
join customers cs
on em.employeeNumber = cs.salesRepEmployeeNumber
group by em.employeeNumber;

select avg (avg_total) from (
	select count(customerNumber) as avg_total from customers group by salesRepEmployeeNumber
) as avg_result;

select em.employeeNumber, concat(em.firstname, ' ', em.lastname) as employee_name, count(customerNumber) as total_customer
from employees em
join customers cs
on em.employeeNumber = cs.salesRepEmployeeNumber
group by em.employeeNumber
having total_customer > (
	select avg (avg_total) from (
		select count(customerNumber) as avg_total from customers group by salesRepEmployeeNumber
	) as avg_result
);

-- tampilakan data order dengan total quantity > 50 dan status shiped
select o.orderNumber, o.status, sum(od.quantityOrdered) as total_qty from orders o
join orderdetails od
on o.orderNumber = od.orderNumber
group by o.orderNUmber
having o.status = 'Shipped' and total_qty > 50;

-- PR : tampilkan data user dan total order tiap user, total price, total quantity => history transaction
-- tambah filter, tampilkan user yang punya credit limit > total price
-- tambah filer, tampilkan user yang punya total order > rata2 total order di negara 'USA'

-- SELF JOIN => dalam hirearcial data
