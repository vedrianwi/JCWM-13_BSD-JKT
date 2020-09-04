const db = require("../database");

module.exports = {
	getAllProducts: (req, res) => {
		db.dbQueryWithErrorHandle(res, async () => {
			const getProduk = `SELECT p.id, p.nama, p.harga, p.deskripsi, p.brand, p.rating, 
							GROUP_CONCAT(pi.images ORDER BY pi.id) as images
							FROM produk p
							JOIN produk_img pi
							ON p.id = pi.produk_id
							GROUP by p.id`;
			const produk = await db.dbQuery(getProduk);

			// prepare data for client
			produk.forEach(item => (item.images = item.images.split(",")));

			res.status(200).send(produk);
		});
	},
	getProductsById: (req, res) => {
		const id = parseInt(req.params.id);
		db.dbQueryWithErrorHandle(res, async () => {
			const getProduk = `SELECT p.id, p.nama, p.harga, p.deskripsi, p.brand, p.rating,
							GROUP_CONCAT(pi.images ORDER BY pi.id) as images
							FROM produk p
							JOIN produk_img pi
							ON p.id = pi.produk_id
							WHERE pi.produk_id = ?
							GROUP by p.id`;
			const produk = await db.dbQuery(getProduk, id);

			// prepare data for client
			produk[0].images = produk[0].images.split(",");

			res.status(200).send(produk);
		});
	},
	getProductsCarousel: (req, res) => {
		db.dbQueryWithErrorHandle(res, async () => {
			const getItems = "SELECT * FROM carousel";
			const items = await db.dbQuery(getItems);

			res.status(200).send(items);
		});
	},
};
