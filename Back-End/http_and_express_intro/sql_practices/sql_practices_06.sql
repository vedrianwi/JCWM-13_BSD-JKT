use practice_jcwm13;

select * from products;
select * from product_category;

-- MANY to MANY relation
-- JOIN TABLES in many to many relation, need one table to connect the other two tables
-- JOIN categories and products
select * from products p
join product_category pc on p.id = pc.product_id
join categories c on c.id = pc.category_id;

-- CRUD OPERATION :
-- CREATE : INSERT, POST
-- READ : SELECT, GET
-- UPDATE : UPDATE, PATCH/PUT
-- DELETE : DELETE, DELETE

-- INSERT PRODUCT => 
-- 1. insert product info to table products
-- 2. insert product category => NOTES : product_id & category_id (sigle path / satu jalur category)

-- cari parent untuk category_id = 13
select c1.id as id_1, c2.id as id_2, c3.id as id_3 from categories c1
left join categories c2 on c1.id = c2.parent_id
left join categories c3 on c2.id = c3.parent_id
where c3.id = 13;

-- login
use practice_jcwm13;

select * from users;