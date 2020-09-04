const db = require("../database");

module.exports = {
	addToCart: (req, res) => {
		db.dbQueryWithErrorHandle(res, async () => {
			// check in status 1 in order table
			const checkorder = "SELECT order_number FROM orders WHERE user_id = ? AND status = 1";
			const cart = await db.dbQuery(checkorder, [req.body.user_id]);
			console.log("result : ", cart);

			const order_number = cart.length ? cart[0].order_number : Date.now();
			if (!cart.length) {
				// add data to order
				const order = { order_number, user_id: req.body.user_id, status: 1 };
				const makeorder = `INSERT INTO orders SET ?`;
				await db.dbQuery(makeorder, order);
			}

			// insert order details
			const orderdetails = {
				order_number,
				product_id: req.body.product_id,
				qty: req.body.qty,
				color: req.body.color,
				size: req.body.size,
				total: req.body.total,
			};
			const makeorderdetails = `INSERT INTO order_details SET ?`;
			await db.dbQuery(makeorderdetails, orderdetails);

			// send response to client-side
			res.status(200).send("add to cart success.");
		});
	},
	getCartData: (req, res) => {
		db.dbQueryWithErrorHandle(res, async () => {
			const getcart = `SELECT od.id, od.order_number, p.harga, p.nama, od.qty
					FROM orders o
					JOIN order_details od ON o.order_number = od.order_number
					JOIN produk p ON od.product_id = p.id
					WHERE user_id = ? AND o.status = 1`;
			const cart = await db.dbQuery(getcart, [parseInt(req.params.id)]);

			const getDetails = `SELECT SUM(od.total) as total, od.order_number
					FROM orders o
					JOIN order_details od ON o.order_number = od.order_number
					JOIN produk p ON od.product_id = p.id
					WHERE user_id = ? AND o.status = 1`;
			const details = await db.dbQuery(getDetails, [parseInt(req.params.id)]);

			res.status(200).send({ cart, details: details[0] });
		});
	},
	editQtyInCart: (req, res) => {
		db.dbQueryWithErrorHandle(res, async () => {
			const editqty = `UPDATE order_details SET qty = ?, total = ? WHERE id = ?`;
			const edit = await db.dbQuery(editqty, [
				req.body.qty,
				req.body.total,
				parseInt(req.params.id),
			]);

			res.status(200).send("edit qty success.");
		});
	},
	deteleProductInCart: (req, res) => {
		console.log("params : ", req.params);
		db.dbQueryWithErrorHandle(res, async () => {
			const deleteproduct = `DELETE FROM order_details WHERE id = ?`;
			await db.dbQuery(deleteproduct, [parseInt(req.params.id)]);

			res.status(200).send("delete success.");
		});
	},
	checkOut: (req, res) => {
		console.log(req.params.on);
		db.dbQueryWithErrorHandle(res, async () => {
			const checkoutquery = `UPDATE orders SET status = 2 WHERE order_number = ?`;
			await db.dbQuery(checkoutquery, [parseInt(req.params.on)]);

			res.status(200).send("checkout success.");
		});
	},
};
