-- choose database
use practice_jcwm13;

-- choose table or show data in choosen table
select * from users;

-- insert data
insert into users values(1, 'alee', 'alee0510@gmail.com', 'user');
select * from users;

insert into users (username, email, role) values ('lollita', 'lolana@gmail.com', 'user');
select * from users;

insert into users set username='nett', email='php@gmail.net', role='user';
select * from users;

insert into users (username, role) values ('angel', 'user');
select * from users;

-- select database
use classicmodels;
select * from customers;
select * from employees;
select * from orders;

select customerNumber, customerName, contactLastName from customers;

-- sorting data
select customerNumber, customerName from customers order by customerNumber asc;
select customerNumber, customerName from customers order by customerName desc;