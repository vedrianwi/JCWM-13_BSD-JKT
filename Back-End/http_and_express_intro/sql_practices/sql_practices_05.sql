use classicmodels;
select * from orders;
select * from customers;

select em.employeeNumber, em.firstName, max(cs.creditLimit) from customers cs
join employees em
on cs.salesRepEmployeeNumber = em.employeeNumber
group by em.employeeNumber;

select cs.customerNumber, cs.customerName, count(o.orderNumber) as total_order, sum(od.quantityOrdered) as total_qty, sum(od.quantityOrdered * od.priceEach) as total_price 
from customers cs
join orders o on cs.customerNumber = o.customerNumber
join orderdetails od on od.orderNumber = o.orderNumber
group by cs.customerNumber;

select cs.customerNumber, cs.customerName, 
	count(o.orderNumber) as total_order, sum(od.quantityOrdered) as total_qty, 
    sum(od.quantityOrdered * od.priceEach) as total_price, 
    cs.creditLimit 
from customers cs
join orders o on cs.customerNumber = o.customerNumber
join orderdetails od on od.orderNumber = o.orderNumber
group by cs.customerNumber
having cs.creditLimit > total_price;

select cs.customerNumber, cs.customerName, 
	count(o.orderNumber) as total_order, sum(od.quantityOrdered) as total_qty, 
    sum(od.quantityOrdered * od.priceEach) as total_price, 
    cs.creditLimit 
from customers cs
join orders o on cs.customerNumber = o.customerNumber
join orderdetails od on od.orderNumber = o.orderNumber
group by cs.customerNumber
having cs.creditLimit > total_price and total_order > (
	select avg(total_order) from (
		select count(o.orderNumber) as total_order from customers cs 
		join orders o 
		on cs.customerNumber = o.customerNumber 
		where cs.country = 'USA'
		group by cs.customerNumber
	) as avg_total_order
);


-- Hierarchical database
use practice_jcwm13;
select * from categories;
select * from users;

-- SELF and OUTER JOIN
select * from categories c1
join categories c2 on c1.id = c2.parent_id;

select * from categories c1
left join categories c2 on c1.id = c2.parent_id;

-- top parent / category paling atas
select * from categories where parent_id is null;

-- get direct children of top parent
select * from categories where parent_id = 1;
select * from categories where parent_id = 2;
select * from categories where parent_id = 3;

-- RETRIEVING A FULL TREE
select c1.id, c1.category, c2.category as lv1,  c3.category as lv2, c4.category as lv3
from categories c1
left join categories c2 on c1.id = c2.parent_id
left join categories c3 on c2.id = c3.parent_id
left join categories c4 on c3.id = c4.parent_id;

select c1.id, c1.category, concat(c1.category, ' > ', c2.category, ' > ',  c3.category, ' > ', c4.category) as path
from categories c1
left join categories c2 on c1.id = c2.parent_id
left join categories c3 on c2.id = c3.parent_id
left join categories c4 on c3.id = c4.parent_id;

-- RETRIEVING A SINGLE PATH
select c1.id, c1.category, c2.category as lv1,  c3.category as lv2, c4.category as lv3
from categories c1
left join categories c2 on c1.id = c2.parent_id
left join categories c3 on c2.id = c3.parent_id
left join categories c4 on c3.id = c4.parent_id
where c1.category = 'Elektronik' and c4.category = 'Android';

-- FINDING ALL THE LEAF NODES / category paling bawah yang sudah tidak punya anak lagi.
select c1.id, c1.category from categories c1
left join categories c2 on c1.id = c2.parent_id
where c2.category is null;

-- PRACTICE
-- singe path => chino, iOS, Jaket kulit
select c1.id, c1.category, c2.category as lv1,  c3.category as lv2, c4.category as lv3
from categories c1
left join categories c2 on c1.id = c2.parent_id
left join categories c3 on c2.id = c3.parent_id
left join categories c4 on c3.id = c4.parent_id
where c4.category = 'Chino';

-- cari leaf nodes dari category elektronik
-- filter yang level paling bawah
select c1.id, c1.category, c2.category as lv1,  c3.category as lv2, c4.category as lv3
from categories c1
left join categories c2 on c1.id = c2.parent_id
left join categories c3 on c2.id = c3.parent_id
left join categories c4 on c3.id = c4.parent_id
where c1.category = 'Elektronik' and c4.parent_id is not null;

select c1.id, c1.category, c2.category as lv1,  c3.category as lv2, c4.category as lv3
from categories c1
left join categories c2 on c1.id = c2.parent_id
left join categories c3 on c2.id = c3.parent_id
left join categories c4 on c3.id = c4.parent_id
where c1.category = 'Elektronik';

-- PR : lathian self join and hirearcial database, coba top parent lain
-- pakai database classicmodels; employee => full tree, leaft nodes, single path masing2 jobTitle
-- cari nama atasan, jabatan, sama bawhannya langsung siapa aja
use classicmodels;
select * from employees;

-- VIEW => virtual table dari query => untuk menyimpan fungsi query
create view category_path as (
	select c1.id, c1.category, c2.category as lv1,  c3.category as lv2, c4.category as lv3
	from categories c1
	left join categories c2 on c1.id = c2.parent_id
	left join categories c3 on c2.id = c3.parent_id
	left join categories c4 on c3.id = c4.parent_id
);

select * from category_path;

-- ceate user and grant previleges
select * from mysql.user;
create user alee0510@localhost;
alter user alee0510@localhost identified with mysql_native_password by 'alee0510';
flush privileges;
grant all on practice_jcwm13.* to alee0510@localhost;