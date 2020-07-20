use classicmodels;

select * from customers;
select * from employees;
select * from orderdetails;
select * from orders;

select salesRepEmployeeNumber, count(customerNumber) as total_customers
from customers
where salesRepEmployeeNumber is not null
group by salesRepEmployeeNumber
order by total_customers desc;

select country, count(customerNumber) as total_customers from customers
where country in ('USA', 'UK')
group by country
order by country;

select orderNumber, sum(quantityOrdered) as total_quantity, sum(quantityOrdered * priceEach) as total_payment
from orderdetails
group by orderNumber
order by orderNumber;

-- HAVING => condtional search
select orderNumber, sum(quantityOrdered) as total_quantity, sum(quantityOrdered * priceEach) as total_payment
from orderdetails
group by orderNumber
having total_quantity > 300
order by orderNumber;

-- hitung total customer per employee, tampilkan total customer >= 5
select salesRepEmployeeNumber, count(customerNumber) as total_customer from customers
where salesRepEmployeeNumber is not null
group by salesRepEmployeeNumber
having total_customer >= 5;

select * from customers;

-- hitung rata2 limit credit customer untuk tiap negara, tampilkan rata2 credit limit > 250000, tamplikan total customer tiap negara
select country, count(customerNumber) as total_customer, avg(creditLimit) as average_credit_limit
from customers
group by country
having average_credit_limit >= 25000
order by country;

-- SUB_QUERY => QUERY 1 (QUERY 2 (QUERY 3)) => EXECUTION ORDER ? 3 -> 2 -> 1
-- tampilkan rata2 credit limit tiap negara yang rata2 credit limit > rata2 credit limit di USA.

select country, avg(creditLimit) as avg_credit_limit
from customers
group by country
order by country;

select country, avg(creditLimit) as avg_credit_limit_usa
from customers
where country = 'USA';

-- use sub-query
select country, avg(creditLimit) as avg_credit_limit
from customers
group by country
having avg_credit_limit > (
	select avg(creditLimit) from customers where country = 'USA'
)
order by country;

-- hitung total negara yang mempunyai rata2 credit limit > rata2 credit limit di USA
select count(*) as total_country from (
	select country, avg(creditLimit) as avg_credit_limit
	from customers
	group by country
	having avg_credit_limit > (
		select avg(creditLimit) from customers where country = 'USA'
	)
	order by country
) as total;

-- INSERT, UPDATE, DELETE, and TRUNCATE
use practice_jcwm13;
select * from users;

-- add data => INSERT
insert into users (username, email, role, address, phone, postalCode, gender)
values ('nana', 'nanana@gmail.net', 'user', 'bandung', '+6285643211234', 50131, 'female');

-- add multiples data
insert into users (username, email, role, address, phone, postalCode, gender)
values ('steven', 'steven@gmail.net', 'user', 'jakarta', '+6285609877890', 55011, 'male'),
('andrew', 'andrew@gmail.net', 'user', 'BSD', '+6285945676547', 43123, 'male');

-- edit data => UPDATE
update users set email = 'angel@gmail.com' where id = 4;
update users set address = 'BSD', phone = '+6285732141432', postalCode = '58181', gender = 'female' where id = 4;


-- delete data => DELETE
delete from users where id = 3;
delete from users where id = 2;

-- hapus isi table => truncate
truncate users;

insert into users (username, email, role, address, phone, postalCode, gender) values
('alee', 'alee@gmail.net', 'user', 'BSD', '+62856722286349', 40131, 'male'), 
('steven', 'steven@gmail.net', 'user', 'jakarta', '+6285609877890', 55011, 'male'),
('andrew', 'andrew@gmail.net', 'user', 'BSD', '+6285945676547', 43123, 'male');

-- relational database : one to one, one to many, many to many
select * from users;
select * from profile;

insert into users (username, email, role) values
('admin', 'admin@gmail.com', 'admin'),
('alee', 'alee@gmail.com', 'user');

insert into profile(user_id, address, phone, gender) values
(1, 'BSD', '+6285609877890', 'Male'),
(2, 'Tangerang', '+6285787655678', 'Male');

-- JOIN => menggabungkan 2 table => CROSS, NATURAL, OUTER (LEFT, RIGHT, FULL), INNER/JOIN
-- JOIN + WHERE
select * from users
join profile
where users.id = profile.user_id; -- foreign_key

-- JOIN + ON
select u.id, u.username, u.email, p.address, p.phone, p.gender from users u
join profile p
on u.id = p.user_id;

use classicmodels;
select * from customers;
select * from employees;
select * from orderdetails;

select * from customers cs
join employees em
on cs.salesRepEmployeeNumber = em.employeeNumber;

select cs.customerNumber, cs.customerName, cs.country, concat(em.firstName, ', ', em.lastName) as sales_employee_name 
from customers cs
join employees em
on cs.salesRepEmployeeNumber = em.employeeNumber
where cs.country = 'USA';

-- PR :
-- tampilkan data rata2 credit limit di negara USA yang mempunyai rata2 credit limit > rata2 credit limit di Germany
-- latihan join => customer dan data employee, order dan order details, data employees dan offices
-- tampilan data orderdetail berdasarkan order number, hitunglan total quantity, total price , tampilkan data dimana
-- total price > rata2 semua total price dan quantity > rata2 total quantity semua order