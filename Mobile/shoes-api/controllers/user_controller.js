const bcrypt = require("bcrypt");
const db = require("../database");
const { validation } = require("../helpers/validation");
const { createToken } = require("../helpers/jwt");

module.exports = {
	register: (req, res) => {
		const { username, email, password, cpassword } = req.body;
		db.dbQueryWithErrorHandle(res, async () => {
			if (password !== cpassword) throw { code: 400, msg: "password doesn't match." };
			delete req.body.cpassword;

			// validate input
			const { error } = validation(req.body);
			if (error) throw { code: 400, msg: error.details[0].message };

			// check user
			const checkuser = `SELECT * FROM users WHERE username = ? or email = ?`;
			const user = await db.dbQuery(checkuser, [username, email]);
			if (user.length) throw { code: 400, msg: "username or email is already exists." };

			// encrypt password
			const salt = await bcrypt.genSalt(10);
			const hashpassword = await bcrypt.hash(password, salt);

			// prepare user's record data
			req.body.password = hashpassword;
			req.body.role = "user";
			req.body.status = 0;

			// add user record to database
			const adduser = `INSERT INTO users SET ?`;
			const newuser = await db.dbQuery(adduser, req.body);

			// filter user's data
			delete req.body.password;
			req.body.id = newuser.insertId;

			// create token
			const token = createToken({ id: newuser.insertId, username });

			// send data to user
			res.status(200).send({ ...req.body, token });
		});
	},
	login: (req, res) => {
		const { username, password } = req.body;
		db.dbQueryWithErrorHandle(res, async () => {
			// check user data
			const checkuser = `SELECT * FROM users WHERE username = ?`;
			const user = await db.dbQuery(checkuser, username);
			if (!user.length) throw { code: 404, msg: "username doesn't exists." };

			// check password
			const valid = await bcrypt.compare(password, user[0].password);
			if (!valid) throw { code: 401, msg: "invalid password." };

			// filter user's data
			delete user[0].password;

			// create token
			const token = createToken({ id: user[0].id, username: user[0].username });

			// send data to user
			res.status(200).send({ ...user[0], token });
		});
	},
	keeplogin: (req, res) => {
		db.dbQueryWithErrorHandle(res, async () => {
			const getuser = `SELECT * FROM users WHERE id = ? AND username = ?`;
			const user = await db.dbQuery(getuser, Object.values(req.user));

			// prepare user's data
			delete user[0].password;

			// send feedback to client
			res.status(200).send(user[0]);
		});
	},
};
