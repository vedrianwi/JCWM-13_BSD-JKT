const db = require("../database");

module.exports = {
	uploadReceipt: async (req, res) => {
		console.log("file :", req.file);
		if (req.file === undefined) {
			res.status(400).send("no transaction receipt.");
			return;
		}
		const filename = `images/${req.file.filename}`;
		console.log("filename : ", filename);

		try {
			const addrecord = `UPDATE transactions SET bukti_transfer = ? WHERE id = ?`;
			await db.dbQuery(addrecord, [filename, req.params.id]);

			res.status(200).send("payment has been sent, wait for approval.");
		} catch (err) {
			console.log(err);
			res.status(500).send(err);
		}
	},
	addPayment: (req, res) => {
		req.body.status = 1;
		// console.log("body : ", req.body);

		db.dbQueryWithErrorHandle(res, async () => {
			// add record payment
			const add = `INSERT INTO transactions SET ?`;
			const info = await db.dbQuery(add, req.body);
			// console.log("info : ", info);

			res.status(200).send({ payment_id: info.insertId });
		});
	},
};
