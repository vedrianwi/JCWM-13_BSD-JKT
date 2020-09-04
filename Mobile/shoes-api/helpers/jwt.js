const jwt = require("jsonwebtoken");

module.exports = {
	createToken: (...args) => {
		return jwt.sign(...args, process.env.TOKEN);
	},
	verifyToken: (req, res, next) => {
		try {
			const token = req.body.token;

			if (!token) {
				res.status(401).send("no token.");
				return;
			}

			const verified = jwt.verify(token, process.env.TOKEN);

			req.user = verified;

			delete req.user.iat;

			next();
		} catch (err) {
			console.log(err);
			res.status(400).send("invalid token");
		}
	},
};
